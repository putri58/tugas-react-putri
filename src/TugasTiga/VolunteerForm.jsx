import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

export default function VolunteerForm() {
  const [nama, setNama] = useState("");
  const [kode, setKode] = useState("");
  const [gaji, setGaji] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [spesialisasi, setSpesialisasi] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getError = (field, value) => {
    if (!value) return "Wajib diisi";
    if (field === "nama") {
      if (/\d/.test(value)) return "Tidak boleh ada angka";
      if (value.length < 3) return "Minimal 3 karakter";
    }
    if (field === "kode") {
      if (!/^[A-Z]+$/.test(value)) return "Harus huruf KAPITAL";
      if (value.length !== 4) return "Harus 4 karakter";
    }
    if (field === "gaji") {
      if (value < 0) return "Tidak boleh negatif";
      if (value < 1000000) return "Minimal Rp 1.000.000";
    }
    return "";
  };

  const errors = {
    nama: getError("nama", nama),
    kode: getError("kode", kode),
    gaji: getError("gaji", gaji),
    lokasi: getError("lokasi", lokasi),
    spesialisasi: getError("spesialisasi", spesialisasi),
  };

  const isValid = Object.values(errors).every((err) => err === "") && nama !== "";
  const thp = gaji ? gaji - (gaji * 0.11) : 0;

  return (
    <div className="fixed inset-0 w-full h-full bg-[#f0fdf4] flex items-center justify-center p-4 overflow-y-auto font-sans">
      <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(5,150,105,0.15)] w-full max-w-md border-b-[12px] border-emerald-600">
        
        <div className="text-center mb-8">
          <div className="bg-emerald-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl shadow-lg rotate-3">
            🦁
          </div>
          <h2 className="text-3xl font-black text-emerald-900 tracking-tighter uppercase leading-none">WildGuard</h2>
          <p className="text-emerald-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Volunteer Registration</p>
        </div>

        <div className="space-y-1">
          <InputField label="Nama Lengkap" type="text" placeholder="Budi Santoso" value={nama} onChange={(e) => {setNama(e.target.value); setIsSubmitted(false)}} error={errors.nama} />
          
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Kode Unik" type="text" placeholder="SAVE" value={kode} onChange={(e) => {setKode(e.target.value); setIsSubmitted(false)}} error={errors.kode} />
            <InputField label="Gaji" type="number" placeholder="Rp" value={gaji} onChange={(e) => {setGaji(e.target.value); setIsSubmitted(false)}} error={errors.gaji} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <SelectField label="Wilayah" options={["Sumatera", "Kalimantan", "Papua"]} value={lokasi} onChange={(e) => {setLokasi(e.target.value); setIsSubmitted(false)}} error={errors.lokasi} />
            <SelectField label="Spesialisasi" options={["Mamalia", "Reptil", "Burung"]} value={spesialisasi} onChange={(e) => {setSpesialisasi(e.target.value); setIsSubmitted(false)}} error={errors.spesialisasi} />
          </div>
        </div>

        {isValid ? (
          <button 
            onClick={() => setIsSubmitted(true)}
            className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-emerald-100 transition-all active:scale-95 uppercase tracking-widest text-xs"
          >
            Submit Data Relawan 🦅
          </button>
        ) : (
          <div className="mt-8 p-4 bg-emerald-50 border-2 border-dashed border-emerald-100 rounded-2xl text-center">
            <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">Lengkapi form untuk mengaktifkan tombol</p>
          </div>
        )}

        {isSubmitted && isValid && (
          <div className="mt-8 p-6 bg-slate-900 rounded-[2rem] text-white shadow-2xl animate-in zoom-in duration-300">
            <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-2">
              <span className="text-[9px] bg-emerald-600 px-2 py-1 rounded font-bold uppercase">Official Member</span>
              <span className="text-emerald-400 font-mono text-xs">#{kode}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{nama}</h3>
            <p className="text-slate-400 text-xs mb-4 italic">{spesialisasi} - {lokasi}</p>
            <div className="pt-4 border-t border-slate-800">
               <p className="text-slate-500 text-[10px] font-bold uppercase mb-1 tracking-tighter">Gaji Bersih (Setelah Pajak 11%)</p>
               <p className="text-2xl font-black text-emerald-400">Rp {thp.toLocaleString("id-ID")}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}