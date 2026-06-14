import React from "react";
import { ChevronDown, Crown, Award, Users, Copy, Check } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible"; // Mempertahankan file collapsible komponen Anda

export default function Membership() {
  // Mempertahankan state untuk mengontrol menu dropdown admin
  const [openLevel, setOpenLevel] = React.useState(false);
  const [openPoin, setOpenPoin] = React.useState(false);
  const [openReferral, setOpenReferral] = React.useState(false);
  
  // Mempertahankan state animasi salin token konfigurasi admin
  const [copied, setCopied] = React.useState(false);

  const handleCopyReferral = () => {
    // Admin menyalin Master API Token / Key Pengaturan Referral untuk integrasi sistem
    navigator.clipboard.writeText("CONFIG_MASTER_REFERRAL_2026");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Header Menu Perspektif Admin */}
      <div className="mb-8 border-b pb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
            Admin Panel
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
          Manajemen & Konfigurasi Membership
        </h1>
        <p className="text-gray-500 text-sm">
          Pusat kendali pengaturan tiering pasien, validasi penukaran poin *loyalty*, dan monitoring performa kode rujukan global.
        </p>
      </div>

      {/* Wrapper Induk Menu */}
      <div className="space-y-4">
        
        {/* ================= 1. KONTROL LEVEL MEMBER (ADMIN VIEW) ================= */}
        <Collapsible open={openLevel} onOpenChange={setOpenLevel} className="border rounded-xl bg-white shadow-sm overflow-hidden">
          <CollapsibleTrigger asChild>
            <button className="flex items-center justify-between w-full p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-50 rounded-lg text-amber-600 border border-amber-100">
                  <Crown className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-base">Master Pengaturan Tiering Member</span>
                  <span className="text-xs text-amber-600 font-medium">Aktif: 3 Tingkatan Kelas Pasien</span>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openLevel ? "transform rotate-180" : ""}`} />
            </button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="p-5 border-t bg-gray-50/50 space-y-4 text-sm text-gray-600">
            <p>Berikut adalah distribusi data member terdaftar beserta konfigurasi persentase diskon klinik saat ini:</p>
            
            <div className="space-y-3">
              {/* Data Baris Tier Gold */}
              <div className="bg-white p-4 border rounded-lg shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800">1. Gold Member</span>
                    <span className="bg-amber-100 text-amber-800 text-[11px] font-medium px-2 py-0.5 rounded">142 Pasien Terdaftar</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Benefit: Diskon 10% Tindakan & Prioritas Antrean Dokter</p>
                </div>
                <Button size="sm" variant="outline" className="text-xs">Ubah Aturan</Button>
              </div>

              {/* Data Baris Tier Silver */}
              <div className="bg-white p-4 border rounded-lg shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800">2. Silver Member</span>
                    <span className="bg-slate-100 text-slate-800 text-[11px] font-medium px-2 py-0.5 rounded">389 Pasien Terdaftar</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Benefit: Diskon 5% Tindakan Medis Umum</p>
                </div>
                <Button size="sm" variant="outline" className="text-xs">Ubah Aturan</Button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>


        {/* ================= 2. APPROVAL POIN REWARD (ADMIN VIEW) ================= */}
        <Collapsible open={openPoin} onOpenChange={setOpenPoin} className="border rounded-xl bg-white shadow-sm overflow-hidden">
          <CollapsibleTrigger asChild>
            <button className="flex items-center justify-between w-full p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 border border-emerald-100">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-base">Antrean Validasi Klaim Poin</span>
                  <span className="text-xs text-emerald-600 font-medium">Ada 2 Permintaan Butuh Persetujuan</span>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openPoin ? "transform rotate-180" : ""}`} />
            </button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="p-5 border-t bg-gray-50/50 space-y-4 text-sm text-gray-600">
            <p>Pasien di bawah ini telah menekan tombol tukar poin di aplikasi mereka. Mohon lakukan verifikasi fisik sebelum menyetujui:</p>
            
            <div className="grid sm:grid-cols-2 gap-3">
              {/* Item Antrean Approval 1 */}
              <div className="bg-white p-4 border rounded-lg shadow-sm flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono font-bold text-gray-400">ID: #9921</span>
                    <span className="bg-amber-50 text-amber-700 text-[10px] font-bold px-1.5 py-0.5 rounded">Cost: 500 Pts</span>
                  </div>
                  <span className="text-sm font-bold text-gray-800 block mt-1">Klaim: 1x Voucher Grooming</span>
                  <span className="text-xs text-indigo-600 font-medium block">Pemilik: Budi Santoso (Milo)</span>
                </div>
                <div className="flex gap-2 pt-1">
                  <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs h-8">Setujui</Button>
                  <Button size="sm" variant="ghost" className="text-xs text-rose-600 hover:bg-rose-50 h-8">Tolak</Button>
                </div>
              </div>

              {/* Item Antrean Approval 2 */}
              <div className="bg-white p-4 border rounded-lg shadow-sm flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono font-bold text-gray-400">ID: #9925</span>
                    <span className="bg-amber-50 text-amber-700 text-[10px] font-bold px-1.5 py-0.5 rounded">Cost: 1000 Pts</span>
                  </div>
                  <span className="text-sm font-bold text-gray-800 block mt-1">Klaim: Potongan Harga Rp 50.000</span>
                  <span className="text-xs text-indigo-600 font-medium block">Pemilik: Dian Pertiwi (Chiki)</span>
                </div>
                <div className="flex gap-2 pt-1">
                  <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs h-8">Setujui</Button>
                  <Button size="sm" variant="ghost" className="text-xs text-rose-600 hover:bg-rose-50 h-8">Tolak</Button>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>


        {/* ================= 3. MONITORING REFERRAL GLOBAL (ADMIN VIEW) ================= */}
        <Collapsible open={openReferral} onOpenChange={setOpenReferral} className="border rounded-xl bg-white shadow-sm overflow-hidden">
          <CollapsibleTrigger asChild>
            <button className="flex items-center justify-between w-full p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 border border-indigo-100">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-base">Statistik Program Rujukan (Referral)</span>
                  <span className="text-xs text-gray-400 font-normal">Pantau total akuisisi pasien baru dari mulut ke mulut</span>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openReferral ? "transform rotate-180" : ""}`} />
            </button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="p-5 border-t bg-gray-50/50 space-y-4 text-sm text-gray-600">
            <p>Metrik performa kampanye rujukan antar pemilik hewan sepanjang bulan berjalan ini:</p>
            
            {/* Indikator Angka Ringkasan */}
            <div className="grid grid-cols-3 gap-2 bg-white p-3 border rounded-lg text-center">
              <div>
                <span className="block text-[10px] uppercase font-bold text-gray-400">Total Klaim</span>
                <span className="text-base font-bold text-slate-800">1,420 Kali</span>
              </div>
              <div className="border-x">
                <span className="block text-[10px] uppercase font-bold text-gray-400">Pasien Baru</span>
                <span className="text-base font-bold text-emerald-600">+88 Cat/Dog</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-gray-400">Bonus Keluar</span>
                <span className="text-base font-bold text-amber-600">17.6k Poin</span>
              </div>
            </div>

            {/* Token Rahasia Integrasi API Developer Sistem */}
            <div className="bg-white p-3 border rounded-lg flex items-center justify-between max-w-full overflow-hidden">
              <div className="truncate mr-2">
                <span className="text-[10px] text-gray-400 block uppercase font-bold tracking-wider">Master Webhook Token Config</span>
                <span className="text-xs font-mono font-bold text-indigo-600 truncate block">CONFIG_MASTER_REFERRAL_2026</span>
              </div>
              <Button size="sm" variant="ghost" onClick={handleCopyReferral} className="h-9 w-24 shrink-0 gap-1.5">
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-green-600">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Salin Key</span>
                  </>
                )}
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>

      </div>
    </div>
  );
}