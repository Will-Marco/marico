export default function Button({ text, className, onClick, primary }) {
  return (
    <button
      className={`px-4 py-2 sm:text-[12px] md:text-[16px] lg:text-[20px] rounded font-medium hover:bg-white/10 active:bg-white/5 transition-all ${className} ${
        primary && "bg-[#326CF9] hover:bg-blue-600 active:bg-blue-800"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
