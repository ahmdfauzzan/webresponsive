import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import logotecno from "../assets/img/logo-techno.png";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const navigate = useNavigate();

  const { mutate: login } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setErrorMsg("");

    login(
      { email, password },
      {
        onSuccess: () => navigate("/home"),
        onError: (error: unknown) => {
          if (error instanceof Error) {
            setErrorMsg(error.message);
          } else {
            setErrorMsg("Login gagal, silakan coba lagi.");
          }
        },
      }
    );
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center px-4">
      {/* Logo */}
      <div className="absolute top-50 left-1/2 transform -translate-x-1/2 mb-8">
        <img
          src={logotecno}
          alt="Logo"
          draggable={false}
          className="min-w-72 h-auto"
        />
      </div>

      {/* Form */}
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1 text-center">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1 text-center">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 p-3 bg-white text-black font-semibold rounded-md shadow hover:shadow-md transition"
            >
              Login
            </button>
          </div>
        </form>

        {errorMsg && (
          <p className="text-red-600 mt-4 text-center">{errorMsg}</p>
        )}
      </div>
    </div>
  );
}
