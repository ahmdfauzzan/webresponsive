import { useMenu } from "@/hook/useMenu";
import { useState } from "react";

export default function MenuPage() {
  const { data, isLoading } = useMenu();
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  const rawCategories = data?.result.categories ?? [];

  // Atur ulang urutan berdasarkan kategori terpilih
  const categories = [...rawCategories].sort((a, b) => {
    if (!selectedCategory) return 0;
    if (a.category_name === selectedCategory) return -1;
    if (b.category_name === selectedCategory) return 1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="overflow-x-auto whitespace-nowrap mb-4 border-gray-200">
        <div className="flex gap-6 px-4 pt-3 pb-2">
          {rawCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat.category_name)}
              className={`pb-2 text-sm whitespace-nowrap font-medium ${
                selectedCategory === cat.category_name
                  ? "text-black border-b-2 border-black"
                  : "text-gray-400"
              }`}
            >
              {cat.category_name}
            </button>
          ))}
        </div>
      </div>

      {/* List kategori & menu */}
      {categories.map((cat, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="text-sm font-semibold text-gray-600 mb-2 border-gray-200 pb-1 ml-4">
            {cat.category_name}
          </h2>

          <div>
            {cat.menu.map((item, i) => (
              <div
                key={i}
                className="bg-white p-3 flex gap-3 shadow-sm border-b border-dotted"
              >
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-sm">{item.name}</h3>
                    <span className="text-sm font-semibold text-gray-700">
                      {item.price.toLocaleString("id-ID")}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
