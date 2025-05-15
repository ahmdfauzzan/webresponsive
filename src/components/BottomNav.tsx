import { NavLink } from "react-router-dom";
import { Home, List } from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="bg-white shadow-md fixed bottom-0 inset-x-0 z-10">
      <div className="max-w-md mx-auto flex justify-around py-2">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `flex flex-col items-center text-sm ${
              isActive ? "text-black font-semibold" : "text-gray-400"
            }`
          }
        >
          <Home className="w-5 h-5 mb-1" />
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            `flex flex-col items-center text-sm ${
              isActive ? "text-black font-semibold" : "text-gray-400"
            }`
          }
        >
          <List className="w-5 h-5 mb-1" />
          Menu
        </NavLink>
      </div>
    </nav>
  );
}
