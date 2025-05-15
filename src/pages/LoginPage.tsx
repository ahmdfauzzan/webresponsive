import { useHome } from "@/hook/useHome";

export default function HomePage() {
  const { data, isLoading, isError, error, refetch } = useHome();

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError && error instanceof Error)
    return (
      <div className="text-center mt-10 text-red-500">
        <p>{error.message}</p>
        <button onClick={() => refetch()} className="underline mt-2 text-sm">
          Coba lagi
        </button>
      </div>
    );

  const { greeting, name, saldo, point, qrcode, banner } = data!.result;

  return (
    <div className="min-h-screen bg-gray-100 px-4 pb-20">
      {/* Greeting Card */}
      <div className="mt-6 mb-6">
        <div className="bg-white shadow rounded-xl p-4">
          <p className="text-gray-500">{greeting},</p>
          <h2 className="text-lg font-bold mb-3">{name}</h2>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={qrcode} alt="QR" className="w-10 h-10" />
              <div>
                <p className="text-sm text-gray-600">Saldo</p>
                <p className="text-base font-semibold">
                  Rp {saldo.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Points</p>
              <p className="text-green-500 font-semibold">{point}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div>
        <div className="relative overflow-hidden rounded-xl">
          <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory">
            {banner.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Banner ${index + 1}`}
                className="w-full h-40 object-cover rounded-xl snap-start shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Dot + View All */}
        <div className="flex justify-between items-center mt-2 px-1">
          <div className="flex gap-1">
            {banner.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === 0 ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
          <button className="text-sm text-green-500 font-medium">
            View All →
          </button>
        </div>
      </div>
    </div>
  );
}
