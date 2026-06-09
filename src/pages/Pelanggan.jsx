import React from "react"
import { columnsPasien } from "./columnPasien";
import { DataTable } from "../components/data-display/Table"; // Path mengarah ke folder display-mu

const dummyPasien = [
  {
    id: 1,
    namaPemilik: "Andi Saputra",
    namaHewan: "Milo",
    jenisHewan: "Kucing",
    umur: 4,
    diagnosis: "Sebaceous Cyst",
    dokter: "Drh. Siti Rahma",
    status: "Dalam Perawatan",
  },
  {
    id: 2,
    namaPemilik: "Rina Putri",
    namaHewan: "Bruno",
    jenisHewan: "Anjing",
    umur: 7,
    diagnosis: "Dermoid Cyst",
    dokter: "Drh. Ahmad Fauzi",
    status: "Selesai",
  },
  {
    id: 3,
    namaPemilik: "Budi Santoso",
    namaHewan: "Luna",
    jenisHewan: "Kucing",
    umur: 3,
    diagnosis: "Ovarian Cyst",
    dokter: "Drh. Maya Sari",
    status: "Operasi",
  },
  {
    id: 4,
    namaPemilik: "Dewi Lestari",
    namaHewan: "Mochi",
    jenisHewan: "Kelinci",
    umur: 2,
    diagnosis: "Follicular Cyst",
    dokter: "Drh. Nanda Putra",
    status: "Dalam Perawatan",
  },
  {
    id: 5,
    namaPemilik: "Fajar Hidayat",
    namaHewan: "Rocky",
    jenisHewan: "Anjing",
    umur: 5,
    diagnosis: "Sebaceous Cyst",
    dokter: "Drh. Ahmad Fauzi",
    status: "Selesai",
  },
  {
    id: 6,
    namaPemilik: "Siti Nurhaliza",
    namaHewan: "Kitty",
    jenisHewan: "Kucing",
    umur: 6,
    diagnosis: "Dermoid Cyst",
    dokter: "Drh. Maya Sari",
    status: "Kontrol",
  },
  {
    id: 7,
    namaPemilik: "Rahmat",
    namaHewan: "Snow",
    jenisHewan: "Hamster",
    umur: 1,
    diagnosis: "Skin Cyst",
    dokter: "Drh. Siti Rahma",
    status: "Dalam Perawatan",
  },
  {
    id: 8,
    namaPemilik: "Putri Agustine",
    namaHewan: "Oyen",
    jenisHewan: "Kucing",
    umur: 4,
    diagnosis: "Sebaceous Cyst",
    dokter: "Drh. Nanda Putra",
    status: "Operasi",
  },
]

export default function Pelanggan() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Data Pasien Cyst - Klinik Dokter Hewan
      </h1>
      
      {/* Memasang Tabel Baru */}
      <DataTable 
        columns={columnsPasien} 
        data={dummyPasien} 
        filterKey="namaPemilik"
        filterPlaceholder="Cari nama pemilik..."
      />
    </div>
  )
}