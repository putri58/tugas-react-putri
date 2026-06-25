import React, { useState } from "react";
import { FaTrash, FaCheck, FaSearch } from "react-icons/fa";

export default function DataTransaksi() {
  // Data Dummy Transaksi
  const [transactions, setTransactions] = useState([
    { id: 1, invoice: "INV/20260510/0042", name: "putriagustin", service: "Vaksinasi Rabies Booster", total: "Rp 225.000", method: "QRIS", status: "Lunas" },
    { id: 2, invoice: "INV/20260424/0019", name: "putriagustin", service: "Konsultasi & Obat Jamur", total: "Rp 180.000", method: "Transfer BCA", status: "Lunas" },
    { id: 3, invoice: "INV/20260625/0115", name: "Jeon Jungkook", service: "Grooming Kucing Persia", total: "Rp 150.000", method: "Tunai", status: "Pending" },
  ]);

  const handleSetLunas = (id) => {
    setTransactions(transactions.map(tx => tx.id === id ? { ...tx, status: "Lunas" } : tx));
  };

  const handleDelete = (id) => {
    if (window.confirm("Hapus data transaksi ini?")) {
      setTransactions(transactions.filter(tx => tx.id !== id));
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">Data Transaksi</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-all shadow-sm">
          Refresh Data
        </button>
      </div>

      {/* Tabel Transaksi */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-400 font-bold uppercase text-[11px] tracking-wider border-b border-slate-100">
              <th className="p-4">No</th>
              <th className="p-4">No. Invoice</th>
              <th className="p-4">Username</th>
              <th className="p-4">Layanan</th>
              <th className="p-4">Total</th>
              <th className="p-4">Metode</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 text-slate-600 font-medium">
            {transactions.map((tx, index) => (
              <tr key={tx.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4">{index + 1}</td>
                <td className="p-4 font-mono text-xs text-slate-500">{tx.invoice}</td>
                <td className="p-4 text-slate-900 font-semibold">{tx.name}</td>
                <td className="p-4">{tx.service}</td>
                <td className="p-4 text-blue-600 font-bold">{tx.total}</td>
                <td className="p-4 text-xs text-slate-500">{tx.method}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    tx.status === "Lunas" ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"
                  }`}>
                    {tx.status}
                  </span>
                </td>
                <td className="p-4 flex items-center justify-center gap-3">
                  {tx.status === "Pending" && (
                    <button 
                      onClick={() => handleSetLunas(tx.id)}
                      className="text-green-600 hover:text-green-800 p-1" 
                      title="Setel Lunas"
                    >
                      <FaCheck />
                    </button>
                  )}
                  <button 
                    onClick={() => handleDelete(tx.id)}
                    className="text-red-400 hover:text-red-600 p-1"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}