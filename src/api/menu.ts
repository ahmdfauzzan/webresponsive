import { getToken } from "../utils/storage";

export interface MenuItem {
  name: string;
  description: string;
  photo: string;
  price: number;
}

export interface MenuCategory {
  category_name: string;
  menu: MenuItem[];
}

export interface MenuResponse {
  status: string;
  result: {
    categories: MenuCategory[];
  };
}

export const fetchMenu = async (): Promise<MenuResponse> => {
  const token = getToken();
  const response = await fetch(`${import.meta.env.VITE_APP_SERVER}/api/menu`, {
    method: "POST",
    headers: {
      Authorization: token ?? "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ show_all: 1 }),
  });

  if (!response.ok) {
    const errorBody = await response.json();
    throw new Error(errorBody.message || "Gagal mengambil data menu");
  }

  return response.json();
};
