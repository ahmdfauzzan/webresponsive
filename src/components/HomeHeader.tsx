import logo from "@/assets/img/logo-techno.png";

export default function HomeHeader() {
  return (
    <header className="bg-white shadow-sm px-4 py-3 sticky top-0 z-10">
      <div className="max-w-md mx-auto flex items-center justify-start">
        <img src={logo} alt="Logo" className="h-6" />
      </div>
    </header>
  );
}
