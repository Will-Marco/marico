import happyEmoji from "../../assets/Happy_emoji.svg";
import partyEmoji from "../../assets/Party_emoji.svg";
import smileEmoji from "../../assets/Smile_emoji.svg";

export default function Features() {
  return (
    <section id="features" className="my-[80px] md:my-[100px] lg:my-[150px] flex flex-col items-center">
      <p className="text-center text-[40px] sm:text-[30px] md:text-[50px] lg:text-[75px] font-semibold">
        Why Creators Love Marico
      </p>
      <div className="w-full mt-5 md:mt-8 lg:mt-10 flex flex-col sm:flex-row justify-evenly items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <img src={smileEmoji} alt="happy_emoji" />
            <span className="text-[25px] sm:text-[20px] lg:text-[35px] font-semibold">
              Reduced Anxiety
            </span>
          </div>
          <p className="text-center text-[18px] sm:text-[14px] md:text-[18px]  lg:text-[22px] text-secondary">
            Never worry about losing your audience.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center gap-2">
            <img src={happyEmoji} alt="happy_emoji" />
            <span className="text-[25px] sm:text-[20px] lg:text-[35px] font-semibold">
              Lower Workload
            </span>
          </div>
          <p className="text-center text-[18px] sm:text-[14px] md:text-[18px]  lg:text-[22px] text-secondary">
            Just share one link. We&lsquo;ll handle the rest.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center gap-2">
            <img src={partyEmoji} alt="happy_emoji" />
            <span className="text-[25px] sm:text-[20px] lg:text-[35px] font-semibold">
              More Time
            </span>
          </div>
          <p className="text-center text-[18px] sm:text-[14px] md:text-[18px]  lg:text-[22px] text-secondary">
            Spend less time on marketing tools
          </p>
        </div>
      </div>
    </section>
  );
}
