"use client";

import { ReactNode } from "react";

import { useAppSelector } from "@/redux";

interface Props {
  children: ReactNode;
  forLoggedIn?: boolean;
}

export const LoggedInValidatorWrapper = ({
  children,
  forLoggedIn = true,
}: Props) => {
  const { isAuthorized } = useAppSelector((state) => state.authReducer);

  if (!forLoggedIn) {
    return <>{isAuthorized ? null : children}</>;
  }

  return <>{isAuthorized ? children : null}</>;
};
