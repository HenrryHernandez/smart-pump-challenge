import { clientApi } from "@/axios/clientApi";
import { StandardResponse, User } from "@/interfaces";

export const useUser = () => {
  const getUserInformation = async () => {
    try {
      const { data } = await clientApi.get<StandardResponse<{ user: User }>>(
        "/user"
      );

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

  return { getUserInformation };
};
