import { userData } from "~~/interfaces";

export const useUser = () => {
  const runtimeConfig = useRuntimeConfig();
  const BASE_URL = runtimeConfig.public.apiBase;
  const { loadSession } = useSession();

  const getUserData = async (userId: number) => {
    const data = await $fetch(`${BASE_URL}users/${userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${loadSession().token}`,
      },
    });
    return data;
  };

  const updateUserData = async (userId: number, userData: userData) => {
    loadSession().userdata._id;
    const data = await $fetch(`${BASE_URL}users/${userId}`, {
      method: "PUT",
      body: userData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${loadSession().token}`,
      },
    });
    return data;
  };

  return {
    getUserData,
    updateUserData,
  };
};
