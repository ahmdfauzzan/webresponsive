import { useQuery } from "@tanstack/react-query";
import { fetchMenu } from "@/api/menu";

export const useMenu = () => {
  return useQuery({
    queryKey: ["menu"],
    queryFn: fetchMenu,
  });
};
