import type { IconType } from "react-icons";
import { IoMdTimer } from "react-icons/io";
import { FaBullseye } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

import { Card } from "../ui/card";

interface CustomCardProps {
  title: string;
  iconClass: string;
  Icon: IconType;
}

const CustomCard = ({ title, iconClass, Icon }: CustomCardProps) => {
  return (
    <Card className="w-full sm:w-[350px] h-[200px] flex flex-col center rounded-[32px]">
      <div className="flex flex-col center gap-y-2">
        <Icon className={`${iconClass} text-blue-500`} />
        <p className="text-xl font-bold text-center font-rum-raisin text-gray-600">
          {title}
        </p>
      </div>
    </Card>
  );
};

export const FillerCards = () => {
  return (
    <div className="w-full flex flex-wrap center gap-x-16 gap-y-8 px-8 py-24 bg-blue-300">
      <CustomCard title="Real-time" iconClass="text-5xl" Icon={IoMdTimer} />
      <CustomCard title="Accurate" iconClass="text-4xl" Icon={FaBullseye} />
      <CustomCard title="Simple" iconClass="text-4xl" Icon={FaRegCheckCircle} />
    </div>
  );
};
