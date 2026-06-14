import React, { useState } from "react";
import { Users, UserPlus, Search, Shield, Clock, Check, MoreVertical } from "lucide-react";
import { Button } from "../components/ui/button";

export default function StaffManagement() {
  // Data Staf Klinik Berdasarkan Peran Sesuai Permintaan Anda
  const [staffList] = useState([
    { id: "STF-01", name: "drh. Sarah Amelia", role: "Dokter Hewan Utama", shift: "Pagi (08:00 - 15:00)", status: "Sedang Bertugas", room: "Poli Interna A" },
    { id: "STF-02", name: "drh. Rian Hidayat", role: "Dokter Bedah", shift: "Malam (15:00 - 22:00)", status: "Belum Masuk", room: "Ruang Operasi" },
    { id: "STF-03", name: "Siti Rahma, A.Md.Vet", role: "Perawat Medis / Paramedis", shift: "Pagi (08:00 - 15:00)", status: "Sedang Bertugas", room: "Ruang Rawat Inap" },
    { id: "STF-04", name: "Budi Hartono", role: "Kasir & Front Desk", shift: "Pagi (08:00 - 15:00)", status: "Sedang Bertugas", room: "Meja Resepsionis" },
    { id: "STF-05", name: "Aldi Pratama", role: "Groomer Specialist", shift: "Malam (15:00 - 22:00)", status: "Libur / Off", room: "Pet Grooming Station" },
  ]);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <Users className="w-6 h-6 text-indigo-600" /> Manajemen Direktori Staf Klinik
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Atur absensi shift harian dokter jaga, pantau penugasan poliklinik, dan kelola hak akses akun CRM.
          </p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2 shrink-0">
          <UserPlus className="w-4 h-4" /> Daftarkan Staf Baru
        </Button>
      </div>

      {/* Grid List Kartu Staf Modern */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {staffList.map((staff) => (
          <div key={staff.id} className="bg-white border rounded-2xl p-5 shadow-sm hover:border-indigo-100 transition-all flex flex-col justify-between space-y-4">
            
            {/* Informasi Atas */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                {/* Badge Role dengan Warna Unik Berdasarkan Jabatan */}
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded font-mono ${
                  staff.role.includes("Dokter") ? "bg-indigo-50 text-indigo-700 border border-indigo-100" :
                  staff.role.includes("Perawat") ? "bg-sky-50 text-sky-700" :
                  staff.role.includes("Kasir") ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-700"
                }`}>
                  {staff.role}
                </span>
                
                {/* Status Kehadiran Saat Ini */}
                <span className={`text-[10px] font-bold inline-flex items-center gap-1 ${
                  staff.status === "Sedang Bertugas" ? "text-emerald-600" : 
                  staff.status === "Belum Masuk" ? "text-amber-500" : "text-gray-400"
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    staff.status === "Sedang Bertugas" ? "bg-emerald-500 animate-pulse" : 
                    staff.status === "Belum Masuk" ? "bg-amber-400" : "bg-gray-300"
                  }`} />
                  {staff.status}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base leading-snug">{staff.name}</h3>
                <span className="text-[11px] text-gray-400 font-mono">ID Akun: {staff.id}</span>
              </div>
            </div>

            {/* Informasi Tengah: Lokasi Penempatan & Shift */}
            <div className="bg-gray-50 rounded-xl p-3 text-xs space-y-2 border border-gray-100/50">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span>Shift: <strong className="text-gray-700">{staff.shift}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Shield className="w-3.5 h-3.5 text-gray-400" />
                <span>Lokasi Tugas: <strong className="text-indigo-600">{staff.room}</strong></span>
              </div>
            </div>

            {/* Tombol Aksi Bawah Kartu */}
            <div className="pt-2 border-t flex gap-2">
              <Button variant="outline" size="sm" className="w-full text-xs text-gray-600 h-8">
                Ubah Jadwal Shift
              </Button>
              <Button variant="ghost" size="sm" className="px-2 h-8 text-gray-400 hover:text-gray-900">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}