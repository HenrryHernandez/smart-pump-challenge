interface Props {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export const BlurShape = (props: Props) => {
  return (
    <div
      className="w-[350px] h-[350px] hidden lg:flex absolute rounded-full bg-blue-500"
      style={{ filter: "blur(18rem)", ...props }}
    />
  );
};
