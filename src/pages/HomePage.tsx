import { useHome } from "../hook/useHome";

export default function HomePage() {
  const { data, isLoading } = useHome();

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  const { greeting, name, saldo, point, qrcode, banner } = data!.result;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto">
        {/* Greeting Card */}
        <div className="bg-white shadow rounded-xl p-4 mb-6">
          <p className="text-gray-500">{greeting},</p>
          <h2 className="text-lg font-bold mb-4">{name}</h2>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={qrcode} alt="QR Code" className="w-12 h-12" />
              <div>
                <p className="text-sm text-gray-600">Saldo</p>
                <p className="font-semibold">Rp {saldo.toLocaleString()}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Points</p>
              <p className="text-green-500 font-semibold">{point}</p>
            </div>
          </div>
        </div>

        {/* Banner Section */}
        <div className="relative overflow-hidden rounded-xl mb-6">
          <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory">
            {banner.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Banner ${index + 1}`}
                className="h-40 w-full object-cover rounded-xl snap-start shrink-0"
              />
            ))}
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
    </div>
  );
}
