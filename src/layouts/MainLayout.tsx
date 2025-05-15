import { Outlet, useLocation } from "react-router-dom";
import HomeHeader from "@/components/HomeHeader";
import MenuHeader from "@/components/MenuHeader";
import BottomNav from "@/components/BottomNav";

export default function MainLayout() {
  const location = useLocation();

  const isHome = location.pathname === "/home";
  const isMenu = location.pathname === "/menu";

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {isHome && <HomeHeader />}
      {isMenu && <MenuHeader />}

      <main className="flex-1 overflow-y-auto px-4 pb-20 pt-4 max-w-md mx-auto w-full">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
}
