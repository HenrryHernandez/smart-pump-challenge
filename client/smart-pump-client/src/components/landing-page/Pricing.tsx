import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { BlurShape } from "./BlurShape";

interface CustomCardsProps {
  isMainCard?: boolean;
  title: string;
  price: string;
  text: string;
}

const CustomCard = ({
  isMainCard = false,
  title,
  price,
  text,
}: CustomCardsProps) => {
  return (
    <Card
      className={cn(
        "flex flex-col center gap-y-16 p-8 rounded-3xl border-0 font-rum-raisin",
        {
          "bg-blue-500": isMainCard,
          "bg-blue-400": !isMainCard,
          "max-w-[280px]": isMainCard,
          "h-[450px]": isMainCard,
          "max-w-[260px]": !isMainCard,
          "h-[430px]": !isMainCard,
        }
      )}
    >
      <div className="flex flex-col center gap-y-8 text-white">
        <div className="flex flex-col center">
          <h3 className="text-center text-xl sm:text-2xl">{title}</h3>
          <h4 className="text-center text-2xl sm:text-4xl">${price}</h4>
          <p className="self-end text-xs sm:text-sm">Per month</p>
        </div>

        <p className="text-center text-lg">{text}</p>
      </div>

      <Button
        className={cn("px-10 py-6 rounded-3xl shadow-md", {
          "bg-blue-500 text-white": !isMainCard,
          "bg-white text-blue-500": isMainCard,
          "hover:text-white": isMainCard,
        })}
      >
        <p className="text-lg sm:text-xl">Start now</p>
      </Button>
    </Card>
  );
};

export const Pricing = () => {
  return (
    <div className="w-full flex center px-20 py-20 lg:py-40 relative bg-black bg-opacity-40">
      <BlurShape top={-50} left={-10} />

      <div className="max-w-[1400px] flex flex-col center gap-y-16">
        <h2 className="text-5xl font-rum-raisin text-white">Pricing</h2>

        <div className="flex flex-col md:flex-row center flex-wrap gap-4">
          <CustomCard
            title="Basic"
            price="110.00"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, reiciendis."
          />
          <CustomCard
            title="Pro"
            price="1,200.00"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, reiciendis."
            isMainCard
          />
          <CustomCard
            title="Premium"
            price="2,200.00"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, reiciendis."
          />
        </div>
      </div>
    </div>
  );
};
