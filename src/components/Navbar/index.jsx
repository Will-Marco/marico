import logo from "../../assets/Company_logo.svg";
import Button from "../util/button";
import NavbarItems from "./navbar-items";

export default function Navbar() {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex justify-between items-center cursor-pointer">
      <img src={logo} alt="logo" onClick={handleClick} />
      <NavbarItems />
      <div className="flex gap-2">
        <Button
          text="Login"
          className="text-underline"
          onClick={() => alert("Clicked")}
        />
        <Button text="Sign Up" primary onClick={() => alert("Clicked")} />
      </div>
    </div>
  );
}
