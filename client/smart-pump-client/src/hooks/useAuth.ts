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

      console.log(data.data?.user);

      return { success: "You have successfully logged in." };
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
