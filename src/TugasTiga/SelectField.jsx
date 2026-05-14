import React from "react";

export default function SelectField({ label, options, value, onChange, error }) {
  return (
    <div className="w-full mb-4 text-left">
      <label className="block text-[11px] font-black text-emerald-900 uppercase tracking-widest mb-1">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-xl bg-white border-2 text-slate-900 outline-none transition-all duration-300 shadow-sm font-bold text-xs appearance-none
          ${error ? "border-red-400 focus:ring-4 focus:ring-red-50" : "border-emerald-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"}`}
      >
        <option value="">Pilih {label}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>
      {error && <p className="text-[10px] text-red-500 font-bold mt-1 italic tracking-tight">🐾 {error}</p>}
    </div>
  );
}