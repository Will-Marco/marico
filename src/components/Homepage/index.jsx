import Button from "../util/button";
import Mobile from "../../assets/Mobile.png";

export default function Homepage() {
  return (
    <div className="2xl:mt-56 flex flex-col justify-center items-center">
      <span className="text-[25px] font-semibold text-primary uppercase">
        step 2
      </span>
      <p className="text-center text-[40px] sm:text-[30px] md:text-[50px] lg:text-[75px] font-semibold">
        Share Your Homepage
      </p>
      <p className="w-1/2 text-[20px] sm:text-[16px] md:text-[20px] lg:text-[30px] text-center text-secondary">
        Share your Wavium homepage link with your followers, and we&lsquo;ll
        handle the rest.
      </p>
      <div className="mt-10 md:mt-16 lg:mt-36 w-full flex flex-col xl:flex-row items-center xl:items-start justify-center gap-8">
        <div className="w-full h-[400px]  md:h-[550px] lg:h-[600px] p-8 relative bg-[#0D0D0D] overflow-hidden">
          <p className="text-[30px] text-[#0FC65C]">One Link</p>
          <p className="text-[40px] sm:text-[30px] md:text-[50px] lg:text-[70px] leading-tight font-semibold text-secondary">
            All You Create. <br /> <span className="text-white">One Link</span>
          </p>
          <img
            src={Mobile}
            alt="Mobile"
            className="absolute bottom-0 left-20 md:left-28 lg:left-64 xl:left-24"
          />
        </div>
        <div className="w-full lg:h-[600px] p-8 relative bg-[#0D0D0D]">
          <p className="text-[30px] text-[#0FC65C]">Collect Subscribers</p>
          <p className="w-2/3 mt-12 text-[40px] sm:text-[30px] md:text-[50px] lg:text-[70px] leading-tight font-semibold text-secondary">
            Emails. Phone #s. <br />{" "}
            <span className="text-white">All Yours.</span>
          </p>
        </div>
      </div>
      <Button
        text="Get Started"
        primary
        className="w-full sm:w-1/2 xl:w-fit mt-8 px-16"
      />
    </div>
  );
}
