import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

export const Banner = () => {
  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[800px] flex center relative bg-blue-200">
      <div className="max-w-[1400px] w-full h-full flex center">
        <div className="w-4/5 md:w-4/5 lg:w-[700px] gap-x-8 flex absolute bg-blacks">
          <div className="w-[300px] hidden lg:flex center">
            <Image src="/logo.png" width={896} height={762} alt="logo" />
          </div>

          <div className="flex flex-1 flex-col items-center lg:items-start p-4 gap-y-6 sm:gap-y-8 xl:gap-y-8">
            <h1 className="text-center text-4xl sm:text-5xl font-bold font-rum-raisin text-blue-500">
              Smart Pump
            </h1>

            <p className="md:text-xl text-center lg:text-left font-duru-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              consectetur voluptate accusantium iure deleniti, mollitia saepe
              sit incidunt cupiditate.
            </p>

            <Button
              className="w-[150px] lg:w-[200px] h-[45px] sm:h-[40px] lg:h-[50px] flex center rounded-3xl shadow-md bg-blue-500"
              asChild
            >
              <Link href="#">
                <p className="inline font-duru-sans">Explore</p>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
