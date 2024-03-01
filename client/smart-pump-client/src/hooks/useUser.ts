import { useState } from "react";

import { z } from "zod";

import { clientApi } from "@/axios/clientApi";
import { StandardResponse } from "@/interfaces";
import { UpdateUserInformationSchema } from "@/schemas";

export const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getUserInformation = async () => {
    try {
      const { data } = await clientApi.get<
        StandardResponse<{ user: z.infer<typeof UpdateUserInformationSchema> }>
      >("/user");

      if (!data.data?.user) {
        return null;
      }

      return {
        user: data.data.user,
      };
    } catch (error) {
      return null;
    }
  };

  const updateUserInformation = async (
    userData: z.infer<typeof UpdateUserInformationSchema>
  ) => {
    setIsLoading(true);

    try {
      delete userData.confirmPassword;
      if (userData.password?.trim().length === 0) {
        delete userData.password;
      }

      await clientApi.put<StandardResponse>("user", userData);

      return { success: "Information updated!" };
    } catch (error) {
      return { error: "Couldn't update user information." };
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, updateUserInformation, getUserInformation };
};
