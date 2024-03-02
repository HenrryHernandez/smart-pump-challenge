import Image from "next/image";

import { Card } from "../ui/card";
import { BlurShape } from "./BlurShape";
import { PolygonsBackground } from "./PolygonsBackground";

interface CustomCardProps {
  imagePath: string;
  title: string;
  subtitle: string;
}

const CustomCard = ({ imagePath, title, subtitle }: CustomCardProps) => {
  return (
    <div className="w-full sm:w-4/5 lg:w-1/2 flex justify-center">
      <Card className="min-h-[200px] w-[90%] lg:w-[400px] xl:w-[450px] flex flex-col items-start justify-center py-2 sm:py-8 pl-28 sm:pl-32 pr-4 relative rounded-lg">
        <div className="flex items-center">
          <div className="w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] absolute left-[15px] sm:-left-[25px]">
            <Image
              src={imagePath}
              alt={title}
              width={1000}
              height={1000}
              className="w-full h-full absolute object-cover rounded-lg"
            />
            <div className="w-full h-full absolute rounded-lg z-10 bg-blue-500 opacity-50"></div>
          </div>

          <div className="py-4 pl-4 sm:pr-4">
            <p className="mb-2 text-2xl font-bolds font-rum-raisin">{title}</p>
            <p className="text-sm sm:text-base font-duru-sans">{subtitle}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export const Services = () => {
  return (
    <div className="w-full flex flex-col center gap-y-16 lg:px-4 xl:px-20 py-20 lg:py-40 relative overflow-hidden bg-blue-100">
      <BlurShape right={0} />
      <PolygonsBackground left={-200} />

      <h2 className="text-5xl font-rum-raisin text-blue-500">Our Services</h2>

      <div className="max-w-[1200px] flex flex-col lg:flex-row flex-wrap center gap-y-4">
        <CustomCard
          imagePath="/landing-page/daily-checks.jpg"
          title="Daily checks"
          subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
        />
        <CustomCard
          imagePath="/landing-page/payment-on-app.jpg"
          title="Payments from the app"
          subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
        />
        <CustomCard
          imagePath="/landing-page/discounts.jpg"
          title="Periodic discounting"
          subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
        />
        <CustomCard
          imagePath="/landing-page/cleaning.jpg"
          title="Monthly cleaning"
          subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
        />
      </div>
    </div>
  );
};
