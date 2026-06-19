import React, { useEffect, useState } from "react";
import {
  Package,
  Plus,
  Search,
  AlertTriangle,
  ArrowUpRight,
  Filter,
  CheckCircle,
} from "lucide-react";
import { Button } from "../components/ui/button"; // Sesuai dengan library button Anda

export default function InventoryManagement() {
  // Data Dummy Inventori Klinik VetCare
  const [inventory, setInventory] = useState([
    {
      id: "INV-001",
      name: "Amoxicillin 500mg",
      category: "Obat-obatan",
      stock: 142,
      unit: "Tablet",
      status: "Aman",
      expiry: "12 Des 2027",
    },
    {
      id: "INV-002",
      name: "Vaksin Rabies (Defensor 3)",
      category: "Vaksin",
      stock: 8,
      unit: "Vial",
      status: "Stok Menipis",
      expiry: "24 Okt 2026",
    },
    {
      id: "INV-003",
      name: "Royal Canin Urinary S/O Kucing",
      category: "Pakan Khusus",
      stock: 25,
      unit: "Bag (2kg)",
      status: "Aman",
      expiry: "15 Jan 2027",
    },
    {
      id: "INV-004",
      name: "Ketamine HCL Injection",
      category: "Anestesi/Obat Keras",
      stock: 3,
      unit: "Vial",
      status: "Kritis",
      expiry: "04 Sep 2026",
    },
    {
      id: "INV-005",
      name: "Cairan Infus Ringer Lactate",
      category: "Alat Medis Habis Pakai",
      stock: 80,
      unit: "Botol",
      status: "Aman",
      expiry: "30 Jun 2028",
    },
    {
      id: "INV-005",
      name: "obat ",
      category: "Alat Medis Habis Pakai",
      stock: 90,
      unit: "Botol",
      status: "Aman",
      expiry: "22 Jun 2028",
    },
  ]);
  const [message, setMessage] = useState("");
  const handleTambahBarang = () => {
    const newItem = {
      id: `INV-00${inventory.length + 1}`,
      name: "Obat Baru",
      category: "Obat-obatan",
      stock: 50,
      unit: "Tablet",
      status: "Aman",
      expiry: "01 Jan 2029",
    };

    setInventory([...inventory, newItem]);
  };

  useEffect(() => {
    if (inventory.length > 0) {
      setMessage(
        `Inventory berhasil diperbarui. Total item sekarang: ${inventory.length}`,
      );

      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [inventory]);
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <Package className="w-6 h-6 text-indigo-600" /> Pusat Inventori &
            Logistik Medis
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Pantau real-time sediaan obat, kontrol masa kedaluwarsa, dan kelola
            otomatisasi reorder barang otomatis.
          </p>
        </div>
        <Button
          onClick={handleTambahBarang}
          className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2 shrink-0"
        >
          <Plus className="w-4 h-4" /> Tambah Barang Baru
        </Button>
      </div>

      {message && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl">
          {message}
        </div>
      )}

      {/* Ringkasan Indikator CRM */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 border rounded-xl shadow-sm">
          <span className="text-xs text-gray-400 block font-bold uppercase">
            Total Item Terdaftar
          </span>
          <span className="text-2xl font-black text-gray-800 block mt-1">
            2,450 Item
          </span>
        </div>
        <div className="bg-amber-50/50 border border-amber-100 p-4 rounded-xl">
          <span className="text-xs text-amber-700 block font-bold uppercase flex items-center gap-1">
            <AlertTriangle className="w-3.5 h-3.5" /> Butuh Restock Segera
          </span>
          <span className="text-2xl font-black text-amber-600 block mt-1">
            12 Item
          </span>
        </div>
        <div className="bg-rose-50/50 border border-rose-100 p-4 rounded-xl">
          <span className="text-xs text-rose-700 block font-bold uppercase">
            Mendekati Expired (&lt; 3 Bulan)
          </span>
          <span className="text-2xl font-black text-rose-600 block mt-1">
            4 Obat
          </span>
        </div>
      </div>

      {/* Filter & Pencarian */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari nama obat, kode batch, atau kategori..."
            className="w-full pl-9 pr-4 py-2 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />
        </div>
        <Button variant="outline" className="gap-2 text-gray-600 text-sm">
          <Filter className="w-4 h-4" /> Filter
        </Button>
      </div>

      {/* Tabel Data Inventori */}
      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b text-gray-400 font-bold text-xs uppercase tracking-wider">
                <th className="p-4">SKU / Nama Barang</th>
                <th className="p-4">Kategori</th>
                <th className="p-4">Volume Stok</th>
                <th className="p-4">Masa Expired</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y font-medium text-gray-700">
              {inventory.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="p-4">
                    <span className="block font-bold text-gray-900">
                      {item.name}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400 block mt-0.5">
                      {item.id}
                    </span>
                  </td>
                  <td className="p-4 text-gray-500 text-xs">{item.category}</td>
                  <td className="p-4 font-semibold">
                    {item.stock}{" "}
                    <span className="text-xs text-gray-400 font-normal">
                      {item.unit}
                    </span>
                  </td>
                  <td className="p-4 text-gray-500 font-mono text-xs">
                    {item.expiry}
                  </td>
                  <td className="p-4 text-center">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full inline-block ${
                        item.status === "Aman"
                          ? "bg-emerald-50 text-emerald-700"
                          : item.status === "Stok Menipis"
                            ? "bg-amber-50 text-amber-700 border border-amber-100"
                            : "bg-rose-50 text-rose-700 border border-rose-100"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs h-8 text-indigo-600 border-indigo-100 hover:bg-indigo-50"
                    >
                      Restock
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
