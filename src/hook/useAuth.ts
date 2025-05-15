import { useMutation } from "@tanstack/react-query";
import { saveToken } from "../utils/storage";
import { login, type LoginResponse } from "../api/login";

interface LoginInput {
  email: string;
  password: string;
}

export const useAuth = () => {
  return useMutation<LoginResponse, Error, LoginInput>({
    mutationFn: ({ email, password }) => login(email, password),
    onSuccess: (data) => {
      const token = `${data.token_type} ${data.access_token}`;
      saveToken(token);
    },
  });
};
