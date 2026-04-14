import React from "react";

export default function SelectField({ label, options, value, onChange, error }) {
  return (
    <div className="mb-5 w-full">
      <label className="block text-gray-700 text-sm font-bold mb-2 uppercase tracking-wide">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none bg-gray-50
          ${error 
            ? "border-red-400 bg-red-50 focus:border-red-500" 
            : "border-gray-100 focus:border-indigo-400 focus:bg-white focus:shadow-md"
          }`}
      >
        <option value="">-- Pilih {label} --</option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>{opt}</option>
        ))}
      </select>
      {error && (
        <p className="text-red-500 text-xs mt-2 italic font-medium">
          ⚠️ {error}
        </p>
      )}
    </div>
  );
}