import { useState } from "react";
import logo from "../../assets/Company_logo.svg";
import Button from "../util/button";
import NavbarItems from "./navbar-items";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const handleMenu = () => {
    setIsVisible((prev) => !prev);
  };

  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex justify-between items-center cursor-pointer">
      <img
        src={logo}
        alt="logo"
        className="sm:w-[110px] md:w-[120px] lg:w-fit"
        onClick={handleClick}
      />
      <Menu className="sm:hidden" onClick={handleMenu} />
      <NavbarItems visible={isVisible} setIsVisible={setIsVisible} />
      <div className={`hidden sm:flex gap-2`}>
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
