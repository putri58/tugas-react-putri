import React from "react";

export default function InputField({ label, type, placeholder, value, onChange, error }) {
  return (
    <div className="mb-5 w-full">
      <label className="block text-gray-700 text-sm font-bold mb-2 uppercase tracking-wide">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none
          ${error 
            ? "border-red-400 bg-red-50 focus:border-red-500 shadow-sm" 
            : "border-gray-100 bg-gray-50 focus:border-indigo-400 focus:bg-white focus:shadow-md"
          }`}
      />
      {/* Tampilan Error secara kondisional */}
      {error && (
        <p className="text-red-500 text-xs mt-2 italic font-medium animate-pulse">
          ⚠️ {error}
        </p>
      )}
    </div>
  );
}