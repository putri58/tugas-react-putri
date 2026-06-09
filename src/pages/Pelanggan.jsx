import React from "react";

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
];

export default function Pelanggan() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Data Pasien Cyst - Klinik Dokter Hewan
      </h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Pemilik Hewan</th>
              <th className="p-3">Nama Hewan</th>
              <th className="p-3">Jenis Hewan</th>
              <th className="p-3">Umur</th>
              <th className="p-3">Diagnosis</th>
              <th className="p-3">Dokter</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {dummyPasien.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-100 text-center"
              >
                <td className="p-3">{item.id}</td>
                <td className="p-3">{item.namaPemilik}</td>
                <td className="p-3">{item.namaHewan}</td>
                <td className="p-3">{item.jenisHewan}</td>
                <td className="p-3">{item.umur} Tahun</td>
                <td className="p-3">{item.diagnosis}</td>
                <td className="p-3">{item.dokter}</td>
                <td className="p-3">
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}