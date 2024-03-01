import { useState } from "react";

import { AxiosError } from "axios";
import { z } from "zod";

import { clientApi } from "@/axios/clientApi";
import { LoginData, StandardResponse } from "@/interfaces";
import { UpdateUserInformationSchema } from "@/schemas";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const login = async (loginData: LoginData) => {
    setIsLoading(true);

    try {
      const { data } = await clientApi.post<
        StandardResponse<{ user: z.infer<typeof UpdateUserInformationSchema> }>
      >("/auth/login", loginData);

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

  const logout = async () => {
    try {
      await clientApi.get<StandardResponse>("/auth/logout");

      return { success: "" };
    } catch (error) {
      return { error: "Something happened. Please try again." };
    }
  };

  return { isLoading, login, logout };
};
