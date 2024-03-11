import logo from "../../assets/Logo.png";
import dot from "../../assets/Dot.svg";
import companyLogo from "../../assets/Company_logo.svg";
import Button from "../util/button";
import { useEffect, useState } from "react";
import { navbarItems } from "../../constants";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const [hash, setHash] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setHash(location.hash);
  }, [location]);

  return (
    <div className="mt-20 md:mt-28 2xl:mt-44 relative flex flex-col justify-center items-center">
      <img src={logo} alt="logo" />
      <p className="text-center text-[30px] sm:text-[25px] md:text-[45px] lg:text-[100px] font-bold">
        Get Started Now
      </p>
      <p className="text-[20px] sm:text-[16px] md:text-[20px] lg:text-[43px] text-center">
        Setup is easy and takes under 5 minutes.
      </p>
      <Button
        text="Get Started Now"
        className="my-4 xl:px-10 2xl:px-20 xl:py-4 text-[20px] sm:text-[30px] font-semibold rounded-lg"
        primary
      />
      <div className="flex justify-center">
        <img src={dot} alt="dot" />
        <p className="text-[20px] sm:text-[16px] md:text-[18px] lg:text-[38px] text-secondary">
          <span className="mx-1 font-bold text-white">1000+</span> creators have
          already started
        </p>
      </div>
      <div className="w-full mt-32 mb-10 flex flex-col md:flex-row justify-between items-center">
        <div>
          <img src={companyLogo} alt="Company-logo" className="w-[225px]" />
          <p className="sm:1/2 md:w-2/3 text-[20px] sm:text-[16px] md:text-[20px] lg:text-[27px] text-center text-secondary">
            info@marico.co
          </p>
        </div>
        <ul className="mt-4 flex justify-center items-center gap-2 lg:gap-4">
          {navbarItems.map((item, idx) => (
            <li
              key={idx}
              className={`sm:text-[14px] md:text-[18px] lg:text-[28px] hover:text-gray-600 transition-all ${
                hash === item.route ? "text-[#3C82F4]" : "text-secondary"
              }`}
            >
              <a href={item.route}>{item.label}</a>
            </li>
          ))}
          <li className="sm:text-[14px] md:text-[18px] lg:text-[28px] text-secondary hover:text-gray-600 transition-all">
            Sign in
          </li>
        </ul>
      </div>
    </div>
  );
}
