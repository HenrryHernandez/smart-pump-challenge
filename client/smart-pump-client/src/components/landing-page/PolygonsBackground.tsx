import Image from "next/image";

interface Props {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export const PolygonsBackground = (props: Props) => {
  return (
    <div
      className="w-[1000px] h-[1000px] hidden xl:flex center absolute"
      style={{ ...props }}
    >
      <div className="w-full h-full flex center absolute opacity-20 animate-spin-slow">
        <Image
          src="/landing-page/polygon-dots.svg"
          width={1}
          height={1}
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="w-full h-full flex center absolute opacity-20 animate-spin-reverse-slow">
        <Image
          src="/landing-page/polygon-border.svg"
          width={1}
          height={1}
          alt=""
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
