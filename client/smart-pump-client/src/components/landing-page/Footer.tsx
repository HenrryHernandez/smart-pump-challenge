import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full h-[300px] flex flex-col items-center bg-blue-500 font-rum-raisin">
      <div className="w-full h-3/4 sm:h-4/5 flex flex-col center p-4">
        <Image
          src="/logo.png"
          alt="logo"
          width={896}
          height={762}
          className="w-[65%] h-[65%] object-contain"
        />
      </div>

      <div className="w-full h-1/4 sm:h-1/5 flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between sm:px-8 bg-blue-600">
        <p className="text-white">© 2024 Smart Pump all rights reserved.</p>

        <div className="flex gap-x-8 text-white">
          <p className="">Contact</p>
          <p className="">Privacy</p>
          <p className="">Legal</p>
        </div>
      </div>
    </footer>
  );
};
