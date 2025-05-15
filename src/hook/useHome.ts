import { useQuery } from "@tanstack/react-query";
import { fetchHome } from "@/api/home";

export const useHome = () => {
  return useQuery({
    queryKey: ["home"],
    queryFn: fetchHome,
  });
};
