import Button from "../util/button";
import Image from "../../assets/Image.png";

export default function Content() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-[25px] font-semibold text-primary uppercase">
        step 1
      </span>
      <p className="text-center text-[40px] sm:text-[30px] md:text-[50px] lg:text-[75px] font-semibold">
        Connect Your Content
      </p>
      <p className="sm:1/2 md:w-2/3 text-[20px] sm:text-[16px] md:text-[20px] lg:text-[30px] text-center text-secondary">
        Bring all of your content together and get a Homepage that automatically
        updates whenever you create anywhere online.
      </p>
      <Button
        text="View Avaliable Sources"
        className="my-8 xl:px-10 2xl:px-18 xl:py-4 text-[20px] sm:text-[12px] rounded-lg border border-gray-600 text-secondary"
      />
      <div className="w-full h-[600px] flex flex-col xl:flex-row relative">
        <div className="w-full h-full py-4 flex flex-col items-center xl:items-start justify-between">
          <p className="text-[20px] sm:text-[16px] md:text-[20px] lg:text-[30px]">
            Your Homepage
          </p>
          <p className="text-[40px] sm:text-[30px] md:text-[50px] lg:text-[75px] font-semibold">
            Your Content. <br /> All in{" "}
            <span className="text-primary">One Spot</span>
          </p>
          <div className="mt-4 xl:mt-0 flex flex-col justify-start items-start gap-3">
            <p>
              <span className="mr-2 py-[2px] px-[12px] bg-gray-700 rounded-full">
                1
              </span>{" "}
              Bring all of your content together into one homepage.
            </p>
            <p>
              <span className="mr-2 py-[2px] px-[10px] bg-gray-700 rounded-full">
                2
              </span>
              Your page automatically updates whenever you create.
            </p>
          </div>
          <div className="my-5 md:my-10 flex flex-col sm:flex-row gap-4 sm:gap-4">
            <Button
              text="Get Started Now"
              className="text-[20px] sm:text-[12px] rounded-lg"
              primary
            />
            <Button
              text="View A Demo"
              className="text-[20px] sm:text-[12px] rounded-lg border border-gray-600 text-secondary"
            />
          </div>
        </div>
        <div className="w-[309px] h-[276px] hidden xl:flex absolute xl:bottom-[80px] 2xl:bottom-[-150px] right-0 bg-[#8B8B8B]"></div>
        <img
          src={Image}
          alt="spotify-image"
          className="xl:w-1/2 2xl:w-fit xl:absolute xl:top-0 right-[-8%]"
        />
      </div>
    </div>
  );
}
