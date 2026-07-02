import React, { useState, useEffect } from "react";
import { FaTrash, FaCheck, FaSync } from "react-icons/fa";
import { crmStore } from "../services/CrmStore";

// Data transaksi dummy bawaan klinik
const DUMMY_TRANSACTIONS = [
  { id: "dummy-1", invoice: "INV/20260510/0042", name: "putriagustin",   service: "Vaksinasi Rabies Booster",     total: "Rp 225.000", method: "QRIS",         status: "Lunas"   },
  { id: "dummy-2", invoice: "INV/20260424/0019", name: "putriagustin",   service: "Konsultasi & Obat Jamur",      total: "Rp 180.000", method: "Transfer BCA", status: "Lunas"   },
  { id: "dummy-3", invoice: "INV/20260625/0115", name: "Jeon Jungkook",  service: "Grooming Kucing Persia",       total: "Rp 150.000", method: "Tunai",        status: "Pending" },
];

export default function DataTransaksi() {
  const [transactions, setTransactions] = useState(DUMMY_TRANSACTIONS);
  const [crmCount, setCrmCount] = useState(0);
  const [lastRefresh, setLastRefresh] = useState(null);

  const loadTransactions = () => {
    const crmTx = crmStore.getTransactions();
    setCrmCount(crmTx.length);
    setTransactions([...crmTx, ...DUMMY_TRANSACTIONS]);
    setLastRefresh(new Date().toLocaleTimeString("id-ID"));
  };

  useEffect(() => {
    loadTransactions();
    window.addEventListener("focus", loadTransactions);
    return () => window.removeEventListener("focus", loadTransactions);
  }, []);

  const handleSetLunas = (id) => {
    // Update di CRM store jika CRM transaction
    const isCrm = !id.startsWith("dummy");
    if (isCrm) {
      crmStore.setTransactionStatus(id, "Lunas");
    }
    setTransactions((prev) =>
      prev.map((tx) => (tx.id === id ? { ...tx, status: "Lunas" } : tx))
    );
  };

  const handleDelete = (id) => {
    if (!window.confirm("Hapus data transaksi ini?")) return;
    const isCrm = !id.startsWith("dummy");
    if (isCrm) {
      crmStore.deleteTransaction(id);
    }
    setTransactions((prev) => prev.filter((tx) => tx.id !== id));
  };

  const pendingCount = transactions.filter((tx) => tx.status === "Pending").length;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Data Transaksi</h2>
          {lastRefresh && (
            <p className="text-xs text-slate-400 mt-0.5">Terakhir diperbarui: {lastRefresh}</p>
          )}
        </div>
        <button
          onClick={loadTransactions}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl text-sm transition shadow-sm cursor-pointer"
        >
          <FaSync size={12} /> Refresh Data
        </button>
      </div>

      {/* CRM Alert */}
      {crmCount > 0 && (
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl px-5 py-3 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-indigo-700 text-sm font-medium">
            🔗 <strong>{crmCount} draft invoice</strong> otomatis diterbitkan dari booking CRM — status <em>Pending</em>, menunggu pembayaran.
          </p>
          {pendingCount > 0 && (
            <span className="bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full">
              {pendingCount} Belum Lunas
            </span>
          )}
        </div>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-xs text-slate-400 font-bold uppercase">Total Transaksi</p>
          <p className="text-3xl font-extrabold text-slate-800 mt-1">{transactions.length}</p>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-2xl p-4">
          <p className="text-xs text-green-600 font-bold uppercase">Lunas</p>
          <p className="text-3xl font-extrabold text-green-700 mt-1">
            {transactions.filter((t) => t.status === "Lunas").length}
          </p>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
          <p className="text-xs text-amber-600 font-bold uppercase">Pending</p>
          <p className="text-3xl font-extrabold text-amber-700 mt-1">{pendingCount}</p>
        </div>
      </div>

      {/* Tabel */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
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
              {transactions.map((tx, index) => {
                const isCrm = !String(tx.id).startsWith("dummy");
                return (
                  <tr key={tx.id} className={`hover:bg-slate-50/50 transition-colors ${isCrm ? "bg-indigo-50/30" : ""}`}>
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">
                      <span className="font-mono text-xs text-slate-500">{tx.invoice}</span>
                      {isCrm && (
                        <span className="ml-2 bg-indigo-100 text-indigo-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full">CRM</span>
                      )}
                    </td>
                    <td className="p-4 text-slate-900 font-semibold">{tx.name}</td>
                    <td className="p-4 max-w-[200px]">
                      <span className="truncate block" title={tx.service}>{tx.service}</span>
                    </td>
                    <td className="p-4 text-blue-600 font-bold">{tx.total}</td>
                    <td className="p-4 text-xs text-slate-500">{tx.method}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        tx.status === "Lunas"
                          ? "bg-green-50 text-green-600"
                          : "bg-amber-50 text-amber-600"
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="p-4 flex items-center justify-center gap-3">
                      {tx.status === "Pending" && (
                        <button
                          onClick={() => handleSetLunas(tx.id)}
                          className="text-green-600 hover:text-green-800 p-1 cursor-pointer"
                          title="Setel Lunas"
                        >
                          <FaCheck />
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(tx.id)}
                        className="text-red-400 hover:text-red-600 p-1 cursor-pointer"
                        title="Hapus"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
