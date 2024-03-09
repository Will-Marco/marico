import Button from "../util/button";
import dot from "../../assets/Dot.svg";

export default function MainHeading() {
  return (
    <section className="w-full flex flex-col justify-center sm:items-center">
      <p className="my-[30px] lg:my-[90px] sm:text-center text-[60px] sm:text-[24px]  md:text-[50px] lg:text-[112px] font-bold ">
        Own your audience. <br />
        <span className="bg-gradient-to-r from-[#FE6783] to-[#FFBF84] text-transparent bg-clip-text">
          So you don&lsquo;t lose theme.
        </span>
      </p>
      <div className="md:w-1/2">
        <p className="sm:text-center text-[30px] sm:text-[18px] md:text-[30px] lg:text-[40px] font-medium">
          Turn your audience into email and text message subscribers.
        </p>
        <div className="my-5 md:my-10 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-evenly">
          <Button
            text="Get Started Now"
            className="xl:px-10 2xl:px-20 xl:py-4 text-[20px] sm:text-[12px] rounded-lg"
            primary
          />
          <Button
            text="View A Demo"
            className="xl:px-10 2xl:px-20 xl:py-4 text-[20px] sm:text-[12px] rounded-lg border border-gray-600 text-secondary"
          />
        </div>
        <div className="flex justify-center">
          <img src={dot} alt="dot" />
          <p className="text-sm md:text-base text-secondary">
            <span className="mx-1 font-bold text-white">1000+</span> creators
            have already started
          </p>
        </div>
      </div>
    </section>
  );
}
