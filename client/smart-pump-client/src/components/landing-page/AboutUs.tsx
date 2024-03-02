import Image from "next/image";

import { PolygonsBackground } from "./PolygonsBackground";

const AboutUsImages = () => {
  return (
    <div className="w-full lg:w-[500px] xl:w-[600px] h-full flex center relative">
      <div className="w-[200px] sm:w-[250px] xl:w-[300px] h-[200px] sm:h-[250px] xl:h-[300px] lg:absolute lg:right-[25px] xl:right-[0px] lg:top-[160px] xl:top-[150px] shadow-lg">
        <Image
          src="/landing-page/pump-1.jpg"
          width={3251}
          height={2265}
          alt="pump 1"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-[150px] xl:w-[200px] h-[150px] xl:h-[200px] hidden lg:flex absolute lg:right-[300px] xl:right-[350px] lg:top-[150px] shadow-lg">
        <Image
          src="/landing-page/pump-2.jpg"
          width={630}
          height={459}
          alt="pump 2"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-[200px] xl:w-[250px] hidden lg:flex absolute lg:right-[150px] xl:right-[150px] lg:top-[0px] xl:top-[-50px] shadow-lg">
        <Image
          src="/landing-page/pump-3.jpg"
          width={461}
          height={280}
          alt="pump 3"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <div className="w-full flex center sm:gap-x-8 lg:gap-x-20 py-20 lg:py-40 relative overflow-hidden bg-blue-100">
      <PolygonsBackground right={-300} />

      <div className="max-w-[1600px] w-full h-auto lg:h-[500px] flex flex-col lg:flex-row items-center lg:justify-evenly gap-16 p-8">
        <div className="max-w-[500px] w-full lg:w-2/5 flex flex-col justify-center gap-y-8">
          <p className="text-4xl sm:text-5xl leading-10 text-center lg:text-left font-rum-raisin text-blue-500">
            We have what you need!
          </p>
          <p className="text-center md:text-xl lg:text-left font-duru-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            dolore illum inventore, sunt aut ipsum architecto voluptate a
            obcaecati. Perferendis. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Quas, maiores. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Natus nulla facilis fuga odio labore
            earum harum saepe sed, doloremque eius.
          </p>
        </div>

        <AboutUsImages />
      </div>
    </div>
  );
};
