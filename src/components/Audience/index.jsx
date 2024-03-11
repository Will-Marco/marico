import audienceBg from "../../assets/audience-bg.png";

export default function Audience() {
  return (
    <div className="mt-20 md:mt-36 2xl:mt-56 relative flex flex-col justify-center items-center">
      <img src={audienceBg} alt="audience-background" />
      <p className="absolute top-1/2 -translate-y-1/2 text-center text-[30px] sm:text-[25px] md:text-[45px] lg:text-[70px] font-semibold">
        We&apos;ve helped over 1,000 creatorsre claim control of their audience.
      </p>
    </div>
  );
}
