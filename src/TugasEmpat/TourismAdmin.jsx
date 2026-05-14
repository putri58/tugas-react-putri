import { useState } from "react";
import tourismData from "./tourism.json";

export default function TourismAdmin() {
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

  // ✅ SEARCH
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
    <div className="p-6">
      {/* 🔍 SEARCH */}
      <input
        type="text"
        name="searchTerm"
        placeholder="Search tourism..."
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-3"
      />

      {/* 🏷️ FILTER TAG */}
      <select
        name="selectedTag"
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-3"
      >
        <option value="">All Tags</option>
        {allTags.map((tag, i) => (
          <option key={i} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      {/* 📂 FILTER CATEGORY */}
      <select
        name="selectedCategory"
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-6"
      >
        <option value="">All Category</option>
        {categories.map((cat, i) => (
          <option key={i} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* 📊 TABLE */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">No</th>
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Rating</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">City</th>
              <th className="p-2 border">Tags</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id} className="text-center hover:bg-gray-100">
                <td className="border p-2">{index + 1}</td>
                {/* IMAGE */}
                <td className="border p-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-12 object-cover mx-auto"
                  />
                </td>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.location}</td>
                <td className="border p-2">{item.category}</td>
                <td className="border p-2">{item.rating}</td>
                <td className="border p-2">Rp {item.price}</td>
                {/* NESTED */}
                <td className="border p-2">{item.details.city}</td>
                {/* TAGS */}
                <td className="border p-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 px-2 py-1 text-xs rounded mr-1"
                    >
                      {tag}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}