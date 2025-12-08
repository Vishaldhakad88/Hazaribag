import React, { useEffect, useState } from "react";

const images = [
  {
    id: 1,
    title: "Beauty Services",
    category: "Beauty",
    img: "https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?fm=jpg&q=60&w=3000",
  },
  {
    id: 2,
    title: "Makeup Artist",
    category: "Beauty",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66jfLt_s_NjnnaEjOurbL_1QCm0iP6oEvpw&s",
  },
  {
    id: 3,
    title: "Wedding Planning",
    category: "Wedding",
    img: "https://aurumconventions.com/blogs/wp-content/uploads/2024/11/wedding-season.webp",
  },
  {
    id: 4,
    title: "Spa & Massage",
    category: "Repairs",
    img: "https://namastespa.in/wp-content/uploads/2024/09/Spa-in-Mysore.jpg",
  },
];

// Category Tabs
const categories = ["All", "Beauty", "Wedding", "Repairs"];

export default function ServicesSearch() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filtered, setFiltered] = useState(images);

  // Pagination
  const [page, setPage] = useState(1);
  const perPage = 4;

  // Auto Filter on search or category change
  useEffect(() => {
    let data = images;

    if (selectedCategory !== "All") {
      data = data.filter((item) => item.category === selectedCategory);
    }

    if (search.trim() !== "") {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(data);
    setPage(1);
  }, [search, selectedCategory]);

  const paginatedData = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div className="w-full px-5 sm:px-10 py-10">
      
      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 px-5 py-3 rounded-xl border shadow-md focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
              selectedCategory === cat
                ? "bg-gray-600 text-white shadow"
                : "bg-white hover:bg-blue-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginatedData.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-3">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span className="px-4 py-2 bg-blue-100 rounded">
            {page}/{totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
