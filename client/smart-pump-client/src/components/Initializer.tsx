"use client";

import { useEffect, ReactNode } from "react";

import { useDispatch } from "react-redux";

import { useUser } from "@/hooks/useUser";
import { AppDispatch, setAuth } from "@/redux";

interface Props {
  children: ReactNode;
}

export const Initializer = ({ children }: Props) => {
  const { getUserInformation } = useUser();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    getUserInformation().then((data) => {
      if (!data) {
        // TODO: logout

        return;
      }

      dispatch(setAuth({ isAuthorized: true, user: data.user }));
    });
  }, []);

  return <div>{children}</div>;
};
