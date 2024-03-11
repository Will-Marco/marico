import expertsImage1 from "../../assets/experts1.png";
import expertsImage2 from "../../assets/experts2.png";
import expertsImage3 from "../../assets/experts3.png";
import expertsImage4 from "../../assets/experts4.png";

export default function Experts() {
  return (
    <div className="mt-20 md:mt-36 2xl:mt-56 flex flex-col justify-center items-center">
      <p className="text-center text-[40px] sm:text-[30px] md:text-[50px] lg:text-[75px] font-semibold">
        Experts Agree
      </p>
      <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-2">
        <img src={expertsImage1} alt="exports-image" className="w-72  object-cover"/>
        <img src={expertsImage2} alt="exports-image" className="w-72  object-cover"/>
        <img src={expertsImage3} alt="exports-image" className="w-72  object-cover"/>
        <img src={expertsImage4} alt="exports-image" className="w-72  object-cover"/>
      </div>
    </div>
  );
}
