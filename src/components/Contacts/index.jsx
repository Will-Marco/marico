import Button from "../util/button";
import Image from "../../assets/Image(1).png";

export default function Contacts() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-[25px] font-semibold text-primary uppercase">
        step 3
      </span>
      <p className="text-center text-[40px] sm:text-[30px] md:text-[50px] lg:text-[75px] font-semibold">
        Send Emails & Text Messages
      </p>
      <p className="sm:1/2 md:w-2/3 text-[20px] sm:text-[16px] md:text-[20px] lg:text-[30px] text-center text-secondary">
        No more going through a social platform. Reach and engage your audience
        directly over email and text massage.
      </p>
      <Button
        text="View Avaliable Sources"
        className="my-8 xl:px-10 2xl:px-18 xl:py-4 text-[20px] sm:text-[12px] rounded-lg border border-gray-600 text-secondary"
      />
      <div className="w-full xl:h-[600px] flex flex-col xl:flex-row relative">
        <div className="w-full h-full py-4 flex flex-col items-center xl:items-start justify-between">
          <p className="text-[20px] sm:text-[16px] md:text-[20px] lg:text-[30px]">
            Create & Share
          </p>
          <p className="text-center xl:text-start text-[40px] sm:text-[30px] md:text-[50px] lg:text-[75px] font-semibold">
            Reach Your <br /> Audience
            <span className="text-primary">Directly.</span>
          </p>
          <div className="mt-4 xl:mt-0 flex flex-col justify-start items-start gap-3">
            <p>
              <span className="mr-2 py-[2px] px-[12px] bg-gray-700 rounded-full">
                1
              </span>{" "}
              Embed content or create something new to share.
            </p>
            <p>
              <span className="mr-2 py-[2px] px-[10px] bg-gray-700 rounded-full">
                2
              </span>
              Share content over email, text message or your homepage.
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
