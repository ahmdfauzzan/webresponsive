import { useMenu } from "@/hook/useMenu";

export default function MenuPage() {
  const { data, isLoading, isError, error, refetch } = useMenu();

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

  const categories = data?.result.categories ?? [];

  return (
    <div className="min-h-screen bg-gray-100 py-4 px-4 pb-20">
      {/* Kategori dan List Menu */}
      {categories.map((cat, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="text-sm font-semibold text-gray-600 mb-2 border-b border-gray-200 pb-1">
            {cat.category_name}
          </h2>

          <div className="space-y-4">
            {cat.menu.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-3 flex gap-3 shadow-sm"
              >
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md border"
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
