export default function Layout({ children, className }) {
  return (
    <div className={`lg:max-w-[1200px] 2xl:max-w-[1640px] mx-[5%] xl:m-auto mt-[40px] xl:mt-[46px] ${className}`}>
      {children}
    </div>
  );
}
