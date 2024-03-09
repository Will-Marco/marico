import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { navbarItems } from "../../../constants";
import Button from "../../util/button";

export default function NavbarItems({ visible, setVisible }) {
  const [hash, setHash] = useState(null);
  const location = useLocation();

  const handleChange = (e) => {
    window.location.href = `/${e.target.value}`;
    setVisible((prev) => !prev);
  };

  useEffect(() => {
    setHash(location.hash);
  }, [location]);

  return (
    <div
      className={`${
        visible
          ? "w-full h-[88%] p-4 absolute top-20 left-0 flex flex-col justify-between bg-black/95"
          : "hidden"
      } sm:flex sm:justify-center items-center gap-2 lg:gap-4 transition`}
    >
      <ul
        className={`${
          visible && "w-full flex-col"
        } flex justify-center items-center gap-2 lg:gap-4`}
      >
        {navbarItems.map((item, idx) => (
          <React.Fragment key={idx}>
            {item.select ? (
              <select
                name="Use Cases"
                className={`pr-1 bg-transparent hover:text-gray-600 text-secondary sm:text-sm lg:text-lg transition-all ${
                  hash === item.route ? "bg-[#3C82F4]" : "text-secondary"
                }`}
                onChange={handleChange}
              >
                {item.select.map((subItem, subIdx) => (
                  <option
                    key={subIdx}
                    className="bg-black"
                    value={subItem.route}
                  >
                    {subItem.label}
                  </option>
                ))}
              </select>
            ) : (
              <li
                key={idx}
                className={`sm:text-[12px] md:text-[16px] lg:text-[20px] hover:text-gray-600 transition-all ${
                  hash === item.route ? "text-[#3C82F4]" : "text-secondary"
                }`}
                onClick={() => setVisible((prev) => !prev)}
              >
                <a href={item.route}>{item.label}</a>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
      <div className={`w-full flex sm:hidden flex-col gap-2`}>
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
