export default function Button({ text, className, onClick, primary }) {
  return (
    <button
      className={`px-4 py-2 text-[20px] rounded hover:bg-white/10 active:bg-white/5 transition-all ${className} ${
        primary && "bg-blue-700 hover:bg-blue-600 active:bg-blue-800"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
