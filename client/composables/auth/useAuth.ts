export const useAuth = () => {
  const runtimeConfig = useRuntimeConfig();
  const BASE_URL = runtimeConfig.public.apiBase;
  const { loadSession } = useSession();

  const login = async (email: string, password: string) => {
    const data = await $fetch(`${BASE_URL}auth/login`, {
      method: "POST",
      body: {
        email,
        password,
      },
    });
    return data;
  };

  const logout = async () => {
    const data = await $fetch(`${BASE_URL}auth/logout`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${loadSession().token.accessToken}`,
      },
    });
    return data;
  };

  return {
    login,
    logout,
  };
};
