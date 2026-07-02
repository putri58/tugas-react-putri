import React, { useEffect, useState } from "react";
import { Package, Plus, Search, AlertTriangle, Filter } from "lucide-react";
import { Button } from "../components/ui/button";
import { crmStore } from "../services/CrmStore";

// Data inventory default klinik
const DEFAULT_INVENTORY = [
  { id: "INV-001", name: "Amoxicillin 500mg",             category: "Obat-obatan",              stock: 142, unit: "Tablet", status: "Aman",         expiry: "12 Des 2027" },
  { id: "INV-002", name: "Vaksin Rabies (Defensor 3)",     category: "Vaksin",                   stock: 8,   unit: "Vial",   status: "Stok Menipis", expiry: "24 Okt 2026" },
  { id: "INV-003", name: "Royal Canin Urinary S/O Kucing", category: "Pakan Khusus",             stock: 25,  unit: "Bag",    status: "Aman",         expiry: "15 Jan 2027" },
  { id: "INV-004", name: "Ketamine HCL Injection",         category: "Anestesi/Obat Keras",      stock: 3,   unit: "Vial",   status: "Kritis",       expiry: "04 Sep 2026" },
  { id: "INV-005", name: "Cairan Infus Ringer Lactate",    category: "Alat Medis Habis Pakai",   stock: 80,  unit: "Botol",  status: "Aman",         expiry: "30 Jun 2028" },
  { id: "INV-006", name: "Vaksin DHPPiL (5 in 1)",         category: "Vaksin",                   stock: 14,  unit: "Vial",   status: "Aman",         expiry: "20 Nov 2026" },
  { id: "INV-007", name: "Shampoo Medis Anti-Kutu",        category: "Grooming",                 stock: 30,  unit: "Botol",  status: "Aman",         expiry: "01 Mar 2028" },
];

function getStatus(stock) {
  if (stock <= 3) return "Kritis";
  if (stock <= 10) return "Stok Menipis";
  return "Aman";
}

export default function InventoryManagement() {
  const [inventory, setInventory] = useState([]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [vaksinBookingCount, setVaksinBookingCount] = useState(0);

  // ── Load inventory (dari CRM store atau default) ──────────
  useEffect(() => {
    const loadInventory = () => {
      const stored = crmStore.getInventory();
      if (stored && stored.length > 0) {
        setInventory(stored);
      } else {
        // Pertama kali: inisialisasi ke CRM store
        crmStore.saveInventory(DEFAULT_INVENTORY);
        setInventory(DEFAULT_INVENTORY);
      }

      // Hitung berapa kali booking vaksinasi dilakukan
      const bookings = JSON.parse(localStorage.getItem("crm_bookings") || "[]");
      const vaksinCount = bookings.filter(
        (b) => b.service === "Vaksinasi & Steril"
      ).length;
      setVaksinBookingCount(vaksinCount);
    };

    loadInventory();
    window.addEventListener("focus", loadInventory);
    return () => window.removeEventListener("focus", loadInventory);
  }, []);

  // ── Simpan ke CRM store setiap inventory berubah ──────────
  const updateInventory = (newInventory) => {
    setInventory(newInventory);
    crmStore.saveInventory(newInventory);
  };

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  // ── Tambah item baru ──────────────────────────────────────
  const handleTambahBarang = () => {
    const newItem = {
      id: `INV-${String(inventory.length + 1).padStart(3, "0")}`,
      name: "Obat / Barang Baru",
      category: "Obat-obatan",
      stock: 50,
      unit: "Tablet",
      status: "Aman",
      expiry: "01 Jan 2029",
    };
    const updated = [...inventory, newItem];
    updateInventory(updated);
    showMessage(`Item baru ditambahkan. Total: ${updated.length} item.`);
  };

  // ── Restock item ──────────────────────────────────────────
  const handleRestock = (id) => {
    const updated = inventory.map((item) => {
      if (item.id !== id) return item;
      const newStock = item.stock + 10;
      return { ...item, stock: newStock, status: getStatus(newStock) };
    });
    updateInventory(updated);
    showMessage(`Restock +10 unit berhasil.`);
  };

  const filtered = inventory.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase())
  );

  const criticalCount = inventory.filter((i) => i.status === "Kritis").length;
  const menipis = inventory.filter((i) => i.status === "Stok Menipis").length;

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <Package className="w-6 h-6 text-indigo-600" /> Pusat Inventori & Logistik Medis
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Stok terupdate otomatis saat ada booking vaksinasi dari CRM.
          </p>
        </div>
        <Button
          onClick={handleTambahBarang}
          className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2 shrink-0"
        >
          <Plus className="w-4 h-4" /> Tambah Barang Baru
        </Button>
      </div>

      {/* CRM Alert */}
      {vaksinBookingCount > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-3 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-amber-800 text-sm font-medium">
            🔗 <strong>{vaksinBookingCount}x booking vaksinasi</strong> dari CRM —
            stok Vaksin Rabies otomatis berkurang. Cek kolom <em>Volume Stok</em>.
          </p>
          <span className="bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full">
            Auto-Deducted
          </span>
        </div>
      )}

      {message && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
          ✅ {message}
        </div>
      )}

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 border rounded-xl shadow-sm">
          <span className="text-xs text-gray-400 font-bold uppercase">Total Item Terdaftar</span>
          <span className="text-2xl font-black text-gray-800 block mt-1">{inventory.length} Item</span>
        </div>
        <div className="bg-amber-50/50 border border-amber-100 p-4 rounded-xl">
          <span className="text-xs text-amber-700 font-bold uppercase flex items-center gap-1">
            <AlertTriangle className="w-3.5 h-3.5" /> Butuh Restock
          </span>
          <span className="text-2xl font-black text-amber-600 block mt-1">{menipis} Item</span>
        </div>
        <div className="bg-rose-50/50 border border-rose-100 p-4 rounded-xl">
          <span className="text-xs text-rose-700 font-bold uppercase">Stok Kritis</span>
          <span className="text-2xl font-black text-rose-600 block mt-1">{criticalCount} Item</span>
        </div>
      </div>

      {/* Search */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama obat, kode, atau kategori..."
            className="w-full pl-9 pr-4 py-2 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />
        </div>
        <Button variant="outline" className="gap-2 text-gray-600 text-sm">
          <Filter className="w-4 h-4" /> Filter
        </Button>
      </div>

      {/* Tabel */}
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
              {filtered.map((item) => (
                <tr
                  key={item.id}
                  className={`hover:bg-gray-50/50 transition-colors ${
                    item.status === "Kritis" ? "bg-rose-50/30" :
                    item.status === "Stok Menipis" ? "bg-amber-50/30" : ""
                  }`}
                >
                  <td className="p-4">
                    <span className="block font-bold text-gray-900">{item.name}</span>
                    <span className="text-[11px] font-mono text-gray-400 block mt-0.5">{item.id}</span>
                  </td>
                  <td className="p-4 text-gray-500 text-xs">{item.category}</td>
                  <td className="p-4 font-semibold">
                    <span className={item.status === "Kritis" ? "text-rose-600" : item.status === "Stok Menipis" ? "text-amber-600" : ""}>
                      {item.stock}
                    </span>{" "}
                    <span className="text-xs text-gray-400 font-normal">{item.unit}</span>
                  </td>
                  <td className="p-4 text-gray-500 font-mono text-xs">{item.expiry}</td>
                  <td className="p-4 text-center">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full inline-block ${
                      item.status === "Aman"
                        ? "bg-emerald-50 text-emerald-700"
                        : item.status === "Stok Menipis"
                        ? "bg-amber-50 text-amber-700 border border-amber-100"
                        : "bg-rose-50 text-rose-700 border border-rose-100"
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleRestock(item.id)}
                      className="text-xs h-8 text-indigo-600 border-indigo-100 hover:bg-indigo-50 cursor-pointer"
                    >
                      +10 Restock
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
