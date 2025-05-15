export interface LoginResponse {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token?: string;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const data = new URLSearchParams();
  data.append("grant_type", "password");
  data.append("client_id", "e78869f77986684a");
  data.append("client_secret", "0a40f69db4e5fd2f4ac65a090f31b823");
  data.append("username", email);
  data.append("password", password);

  const response = await fetch(`${import.meta.env.VITE_APP_SERVER}/oauth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: data,
  });

  if (!response.ok) {
    // Ambil pesan error dari response
    const errorBody = await response.json();
    throw new Error(errorBody.message || "Login gagal");
  }

  const result: LoginResponse = await response.json();
  return result;
};
