import Cookies from "js-cookie";

const TOKEN_KEY = "auth_token";

export const saveToken = (token: string): void => {
  Cookies.set(TOKEN_KEY, token, { expires: 1 }); 
};

export const getToken = (): string | undefined => {
  return Cookies.get(TOKEN_KEY);
};

export const clearToken = (): void => {
  Cookies.remove(TOKEN_KEY);
};
