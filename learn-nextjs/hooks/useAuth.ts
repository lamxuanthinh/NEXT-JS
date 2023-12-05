import { auth } from "./../apiClient/auth";
import useSWR from "swr";
import { PublicConfiguration } from "swr/dist/types";

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/profile", {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    revalidateOnMount: false,
    ...options,
  });

  const firstLoading = profile === undefined && error === undefined;

  const login = async () => {
    await auth.login({
      username: "thinh",
      password: "123456",
    });
    await mutate();
  };
  const logout = async () => {
    await auth.logout();
    mutate({}, false);
  };
  return {
    profile,
    error,
    login,
    logout,
    firstLoading
  };
}
