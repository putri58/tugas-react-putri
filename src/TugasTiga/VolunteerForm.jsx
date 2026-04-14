import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

export default function VolunteerForm() {
  // State untuk setiap input (Sesuai materi)
  const [nama, setNama] = useState("");
  const [kode, setKode] = useState("");
  const [gaji, setGaji] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [spesialisasi, setSpesialisasi] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fungsi Validasi Sederhana
  const getError = (field, value) => {
    if (!value) return "Field ini wajib diisi";
    if (field === "nama" && /\d/.test(value)) return "Nama tidak boleh ada angka";
    if (field === "kode" && value.length !== 4) return "Kode harus 4 karakter";
    if (field === "gaji" && value < 0) return "Gaji tidak boleh negatif";
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
  const totalGaji = gaji ? gaji - (gaji * 0.11) : 0; // Simulasi perhitungan pajak 11%

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-[2rem] shadow-2xl w-full max-w-md border border-white">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-indigo-900 tracking-tight">
            Pendaftaran Relawan
          </h2>
          <p className="text-gray-500 text-sm mt-2 font-medium">Lengkapi data untuk misi penyelamatan</p>
        </div>

        {/* Form Inputs (Reusable Components) */}
        <InputField label="Nama Lengkap" type="text" placeholder="Masukkan nama..." value={nama} onChange={(e) => setNama(e.target.value)} error={errors.nama} />
        <InputField label="Kode ID" type="text" placeholder="Contoh: SAVE" value={kode} onChange={(e) => setKode(e.target.value)} error={errors.kode} />
        <InputField label="Gaji Harapan" type="number" placeholder="Masukkan nominal..." value={gaji} onChange={(e) => setGaji(e.target.value)} error={errors.gaji} />

        <div className="grid grid-cols-2 gap-4">
          <SelectField label="Wilayah" options={["Jawa", "Sumatera", "Papua"]} value={lokasi} onChange={(e) => setLokasi(e.target.value)} error={errors.lokasi} />
          <SelectField label="Divisi" options={["Mamalia", "Reptil", "Burung"]} value={spesialisasi} onChange={(e) => setSpesialisasi(e.target.value)} error={errors.spesialisasi} />
        </div>

        {/* Conditional Rendering: Submit Button */}
        {isValid ? (
          <button 
            onClick={() => setIsSubmitted(true)}
            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-200 transition-all transform active:scale-95 uppercase tracking-widest text-sm"
          >
            Kirim Data
          </button>
        ) : (
          <div className="mt-6 p-4 bg-amber-50 rounded-2xl border border-amber-100 text-amber-700 text-xs text-center font-medium italic">
            Harap isi semua kolom dengan benar...
          </div>
        )}

        {/* Conditional Rendering: Hasil (Success State) */}
        {isSubmitted && isValid && (
          <div className="mt-8 p-6 bg-indigo-900 rounded-3xl text-white shadow-xl animate-in fade-in zoom-in duration-500">
            <h3 className="text-lg font-bold mb-3 flex items-center">
               <span className="mr-2 text-green-400">✅</span> Berhasil Terdaftar!
            </h3>
            <div className="space-y-2 text-sm text-indigo-100">
              <p>Relawan: <span className="text-white font-semibold">{nama}</span></p>
              <p>Penempatan: <span className="text-white font-semibold">{lokasi} ({spesialisasi})</span></p>
              <div className="pt-3 border-t border-indigo-800 mt-2">
                <p className="text-xs text-indigo-300">Take Home Pay (Setelah Pajak 11%):</p>
                <p className="text-2xl font-black text-green-400">
                  Rp {totalGaji.toLocaleString("id-ID")}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}