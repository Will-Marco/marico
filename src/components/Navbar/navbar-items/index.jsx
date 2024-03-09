import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { navbarItems } from "../../../constants";

export default function NavbarItems() {
  const [hash, setHash] = useState(null);
  const location = useLocation();

  const handleChange = (e) => {
    window.location.href = `/${e.target.value}`;
  };

  useEffect(() => {
    setHash(location.hash);
  }, [location]);

  return (
    <ul className="flex justify-center items-center gap-4">
      {navbarItems.map((item, idx) => (
        <React.Fragment key={idx}>
          {item.select ? (
            <select
              name="Use Cases"
              className={`pr-1 bg-transparent hover:text-gray-600 transition-all ${
                hash === item.route ? "bg-[#3C82F4]" : "text-secondary"
              }`}
              onChange={handleChange}
            >
              {item.select.map((subItem, subIdx) => (
                <option key={subIdx} className="bg-black" value={subItem.route}>
                  {subItem.label}
                </option>
              ))}
            </select>
          ) : (
            <li
              key={idx}
              className={`hover:text-gray-600 transition-all ${
                hash === item.route ? "text-[#3C82F4]" : "text-secondary"
              }`}
            >
              <a href={item.route}>{item.label}</a>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}
