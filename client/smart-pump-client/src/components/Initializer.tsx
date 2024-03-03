"use client";

import { useEffect, ReactNode } from "react";

import { useDispatch } from "react-redux";

import { useUser } from "@/hooks";
import { AppDispatch, resetAuth, setAuth } from "@/redux";
import { useAuth } from "@/hooks";

interface Props {
  children: ReactNode;
}

export const Initializer = ({ children }: Props) => {
  const { getUserInformation } = useUser();
  const { logout } = useAuth();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    getUserInformation().then((data) => {
      if (!data) {
        logout();
        dispatch(resetAuth());

        return;
      }

      dispatch(setAuth({ isAuthorized: true, user: data.user }));
    });
  }, []);

  return <div>{children}</div>;
};
