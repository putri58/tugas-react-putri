import { useState } from "react";
import tourismData from "./tourism.json";

export default function TourismGuest() {
  // ✅ STATE 
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    selectedCategory: "",
  });

  // ✅ HANDLE CHANGE 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // ✅ SEARCH TERM
  const _search = dataForm.searchTerm.toLowerCase();

  // ✅ FILTER LOGIC 
  const filteredData = tourismData.filter((item) => {
    const matchSearch =
      item.name.toLowerCase().includes(_search) ||
      item.description.toLowerCase().includes(_search);

    const matchTag = dataForm.selectedTag
      ? item.tags.includes(dataForm.selectedTag)
      : true;

    const matchCategory = dataForm.selectedCategory
      ? item.category === dataForm.selectedCategory
      : true;

    return matchSearch && matchTag && matchCategory;
  });

  // ✅ UNIQUE TAGS 
  const allTags = [
    ...new Set(tourismData.flatMap((item) => item.tags)),
  ];

  // ✅ UNIQUE CATEGORY 
  const categories = [
    ...new Set(tourismData.map((item) => item.category)),
  ];

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-100 via-green-100 to-teal-200 p-6">
    
    {/* HEADER */}
    <h1 className="text-3xl font-bold text-center text-teal-800 mb-6">
      🌿 Explore Indonesia Tourism 🌊
    </h1>

    {/* 🔍 SEARCH & FILTER */}
    <div className="bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-lg mb-6">
      <input
        type="text"
        name="searchTerm"
        placeholder="🔍 Search beautiful places..."
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
      />

      <div className="grid md:grid-cols-2 gap-3">
        {/* TAG */}
        <select
          name="selectedTag"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
        >
          <option value="">🏷️ All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        {/* CATEGORY */}
        <select
          name="selectedCategory"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
        >
          <option value="">📂 All Category</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>

    {/* 🎴 CARD */}
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {filteredData.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition duration-300"
        >
          {/* IMAGE */}
          <div className="relative">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute top-2 right-2 bg-teal-600 text-white text-xs px-3 py-1 rounded-full shadow">
              ⭐ {item.rating}
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">
              {item.name}
            </h2>

            <p className="text-sm text-gray-600 mt-1">
              {item.description}
            </p>

            <div className="mt-3 text-sm text-gray-700">
              <p>📍 {item.location}</p>
              <p className="text-xs text-gray-500">
                {item.details.city} • {item.details.openHours}
              </p>
            </div>

            {/* TAGS */}
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-green-200 to-blue-200 text-gray-700 px-2 py-1 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* PRICE */}
            <div className="mt-4 flex justify-between items-center">
              <span className="text-teal-700 font-semibold">
                Rp {item.price}
              </span>

              <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:opacity-90">
                Explore
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* EMPTY STATE */}
    {filteredData.length === 0 && (
      <p className="text-center text-gray-600 mt-10">
        🌱 No tourism data found...
      </p>
    )}
  </div>
);
}