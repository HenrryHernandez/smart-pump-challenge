import { useState } from "react";

import { AxiosError } from "axios";

import { clientApi } from "@/axios/clientApi";
import { LoginData, StandardResponse, User } from "@/interfaces";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const login = async (loginData: LoginData) => {
    setIsLoading(true);

    try {
      const { data } = await clientApi.post<StandardResponse<{ user: User }>>(
        "/auth/login",
        loginData
      );

      if (!data.data?.user) {
        return {
          error: "Unexpected error. Please contact the admin.",
        };
      }

      return {
        success: "You have successfully logged in.",
        user: data.data.user,
      };
    } catch (error) {
      if (error instanceof AxiosError) {
        return { error: error.response?.data.msg };
      }

      return { error: "Something went wrong. Please try again." };
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, login };
};
