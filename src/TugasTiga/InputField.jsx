import React from "react";

export default function InputField({ label, type, placeholder, value, onChange, error }) {
  return (
    <div className="w-full mb-4 text-left">
      <label className="block text-[11px] font-black text-emerald-900 uppercase tracking-widest mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-xl bg-white border-2 text-slate-900 placeholder:text-emerald-200 outline-none transition-all duration-300 shadow-sm font-semibold
          ${error ? "border-red-400 focus:ring-4 focus:ring-red-50" : "border-emerald-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"}`}
      />
      {error && <p className="text-[10px] text-red-500 font-bold mt-1 italic tracking-tight">🐾 {error}</p>}
    </div>
  );
}