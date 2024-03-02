"use client";

import { createContext, ReactNode, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import { useAppSelector } from "@/redux";

export const AuthenticatedContext = createContext({});

interface Props {
  children: ReactNode;
}

export const AuthenticatedProvider = ({ children }: Props) => {
  const privateRoutes = ["/settings"];
  const publicRoutes = ["/login"];

  const path = usePathname();
  const route = useRouter();

  const { isAuthorized } = useAppSelector((state) => state.authReducer);

  useEffect(() => {
    if (!isAuthorized && privateRoutes.includes(path)) {
      route.replace("/login");
    }

    if (isAuthorized && publicRoutes.includes(path)) {
      route.replace("/settings");
    }
  }, [isAuthorized, path]);

  return (
    <AuthenticatedContext.Provider value={{}}>
      {children}
    </AuthenticatedContext.Provider>
  );
};
