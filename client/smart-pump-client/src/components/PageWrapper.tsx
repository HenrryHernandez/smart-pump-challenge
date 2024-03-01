import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export const PageWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "min-h-[calc(100vh-80px)] w-full h-full flex flex-col p-4 bg-blue-50",
        className
      )}
    >
      {children}
    </div>
  );
};
