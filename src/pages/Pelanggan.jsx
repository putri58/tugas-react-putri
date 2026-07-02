import React, { useState, useEffect } from "react";
import { columnsPasien } from "./columnPasien";
import { DataTable } from "../components/data-display/Table";
import { crmStore } from "../services/CrmStore";

// Data dummy bawaan klinik
const DUMMY_PASIEN = [
  { id: 1,  namaPemilik: "Andi Saputra",    namaHewan: "Milo",  jenisHewan: "Kucing",  umur: 4, diagnosis: "Sebaceous Cyst",  dokter: "Drh. Siti Rahma",   status: "Dalam Perawatan" },
  { id: 2,  namaPemilik: "Rina Putri",      namaHewan: "Bruno", jenisHewan: "Anjing",  umur: 7, diagnosis: "Dermoid Cyst",    dokter: "Drh. Ahmad Fauzi",  status: "Selesai" },
  { id: 3,  namaPemilik: "Budi Santoso",    namaHewan: "Luna",  jenisHewan: "Kucing",  umur: 3, diagnosis: "Ovarian Cyst",    dokter: "Drh. Maya Sari",    status: "Operasi" },
  { id: 4,  namaPemilik: "Dewi Lestari",    namaHewan: "Mochi", jenisHewan: "Kelinci", umur: 2, diagnosis: "Follicular Cyst", dokter: "Drh. Nanda Putra",  status: "Dalam Perawatan" },
  { id: 5,  namaPemilik: "Fajar Hidayat",   namaHewan: "Rocky", jenisHewan: "Anjing",  umur: 5, diagnosis: "Sebaceous Cyst",  dokter: "Drh. Ahmad Fauzi",  status: "Selesai" },
  { id: 6,  namaPemilik: "Siti Nurhaliza",  namaHewan: "Kitty", jenisHewan: "Kucing",  umur: 6, diagnosis: "Dermoid Cyst",    dokter: "Drh. Maya Sari",    status: "Kontrol" },
  { id: 7,  namaPemilik: "Rahmat",          namaHewan: "Snow",  jenisHewan: "Hamster", umur: 1, diagnosis: "Skin Cyst",       dokter: "Drh. Siti Rahma",   status: "Dalam Perawatan" },
  { id: 8,  namaPemilik: "Putri Agustine",  namaHewan: "Oyen",  jenisHewan: "Kucing",  umur: 4, diagnosis: "Sebaceous Cyst",  dokter: "Drh. Nanda Putra",  status: "Operasi" },
];

export default function Pelanggan() {
  const [allPasien, setAllPasien] = useState(DUMMY_PASIEN);
  const [crmCount, setCrmCount] = useState(0);

  useEffect(() => {
    const loadPatients = () => {
      const crmPatients = crmStore.getPatients();
      setCrmCount(crmPatients.length);

      if (crmPatients.length > 0) {
        // Merge: CRM pasien ditambahkan di atas, id di-reassign agar unik
        const merged = [
          ...crmPatients.map((p, i) => ({ ...p, id: 1000 + i })),
          ...DUMMY_PASIEN,
        ];
        setAllPasien(merged);
      } else {
        setAllPasien(DUMMY_PASIEN);
      }
    };

    loadPatients();
    window.addEventListener("focus", loadPatients);
    return () => window.removeEventListener("focus", loadPatients);
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Data Pasien — Klinik Dokter Hewan
        </h1>
        {crmCount > 0 && (
          <div className="flex items-center gap-2 bg-indigo-50 border border-indigo-200 px-4 py-2 rounded-xl">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-indigo-700 font-bold text-sm">
              {crmCount} Pasien Baru dari Booking CRM
            </span>
          </div>
        )}
      </div>

      {crmCount > 0 && (
        <div className="mb-5 bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-3">
          <p className="text-emerald-700 text-sm font-medium">
            🔗 <strong>{crmCount} rekam medis pasien baru</strong> otomatis dibuat dari booking online.
            Data ditampilkan di atas tabel dengan status <em>Menunggu</em> — siap diperbarui oleh dokter.
          </p>
        </div>
      )}

      <DataTable
        columns={columnsPasien}
        data={allPasien}
        filterKey="namaPemilik"
        filterPlaceholder="Cari nama pemilik..."
      />
    </div>
  );
}
