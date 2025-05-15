export const saveToken = (token: string): void => {
  localStorage.setItem("auth_token", token);
};

export const getToken = (): string | null => {
  return localStorage.getItem("auth_token");
};

export const clearToken = (): void => {
  localStorage.removeItem("auth_token");
};
