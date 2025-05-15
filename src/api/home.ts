import { getToken } from "@/utils/storage";

export interface HomeResponse {
  status: string;
  result: {
    greeting: string;
    name: string;
    saldo: number;
    point: number;
    qrcode: string;
    banner: string[];
  };
}

export const fetchHome = async (): Promise<HomeResponse> => {
  const token = getToken();
  const res = await fetch(`${import.meta.env.VITE_APP_SERVER}/api/home`, {
    headers: {
      Authorization: token ?? "",
    },
  });

  if (!res.ok) {
    const errorBody = await res.json();
    throw new Error(errorBody.message || "Gagal mengambil data home");
  }

  return res.json();
};
