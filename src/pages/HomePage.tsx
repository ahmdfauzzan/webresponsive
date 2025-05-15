import { useHome } from "../hook/useHome";
import bgPattern from "../assets/img/patternbg.jpg";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { ChevronRight } from "lucide-react";

export default function HomePage() {
  const { data, isLoading } = useHome();
  const [showQRModal, setShowQRModal] = useState(false);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  const { greeting, name, saldo, point, qrcode, banner } = data!.result;

  return (
    <div className="min-h-screen">
      <div className="max-w-md mx-auto">
        <div
          className="relative shadow p-6 bg-white/80 backdrop-blur-sm"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative bg-white shadow rounded-xl p-4">
            <p className="text-gray-500">{greeting},</p>
            <h2 className="text-lg font-bold mb-4">{name}</h2>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  onClick={() => setShowQRModal(true)}
                  className="w-14 h-14 rounded-full shadow-lg bg-white flex items-center justify-center"
                >
                  <img
                    src={qrcode}
                    alt="QR Code"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <p className="text-bold">Saldo</p>
                  <p className="text-bold">Points</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">Rp {saldo.toLocaleString()}</p>
                <p className="text-green-500 font-semibold">{point}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mb-6">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            modules={[Pagination]}
          >
            {banner.map((url, index) => (
              <SwiperSlide key={index}>
                <img
                  src={url}
                  alt={`Banner ${index + 1}`}
                  className="h-40 w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-between items-center px-4 py-4 bg-white">
            <div className="custom-pagination flex gap-2" />
            <button className="text-sm text-green-500 font-medium flex items-center gap-1">
              View All <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal QR */}
      {showQRModal && (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
          <div className="relative w-full h-full max-w-sm mx-auto p-6 flex flex-col items-center justify-center">
            <button
              onClick={() => setShowQRModal(false)}
              className="absolute top-6 right-6 text-4xl text-black font-bold"
            >
              ×
            </button>

            <p className="text-sm text-center mb-6">
              Show the QR Code below to the cashier
            </p>

            <img
              src={qrcode}
              alt="QR Modal"
              className="w-44 h-44 object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
