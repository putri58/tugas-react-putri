import React from "react";

const layananData = [
  {
    id: 1,
    nama: "Pemeriksaan Umum",
    deskripsi: "Pemeriksaan kondisi kesehatan hewan secara menyeluruh.",
    harga: "Rp 50.000",
  },
  {
    id: 2,
    nama: "Deteksi Cyst",
    deskripsi: "Pemeriksaan dan identifikasi jenis cyst pada hewan.",
    harga: "Rp 150.000",
  },
  {
    id: 3,
    nama: "USG Hewan",
    deskripsi: "Pemeriksaan menggunakan USG untuk melihat kondisi organ dalam.",
    harga: "Rp 250.000",
  },
  {
    id: 4,
    nama: "Operasi Pengangkatan Cyst",
    deskripsi: "Tindakan operasi untuk mengangkat cyst pada hewan.",
    harga: "Rp 1.500.000",
  },
  {
    id: 5,
    nama: "Kontrol Pasca Operasi",
    deskripsi: "Pemeriksaan lanjutan setelah tindakan operasi.",
    harga: "Rp 75.000",
  },
  {
    id: 6,
    nama: "Vaksinasi",
    deskripsi: "Layanan vaksinasi untuk menjaga kesehatan hewan.",
    harga: "Rp 100.000",
  },
];

export default function Layanan() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Data Layanan Klinik Dokter Hewan
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {layananData.map((layanan) => (
          <div
            key={layanan.id}
            className="bg-white shadow-lg rounded-xl p-5 border"
          >
            <h2 className="text-xl font-semibold mb-3">
              {layanan.nama}
            </h2>

            <p className="text-gray-600 mb-4">
              {layanan.deskripsi}
            </p>

            <div className="text-green-600 font-bold text-lg">
              {layanan.harga}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}