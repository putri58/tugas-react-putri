import React from "react";
import { ChevronDown, Crown, Award, Users, Copy, Check } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible"; // Pastikan file collapsible.jsx ada di folder ui Anda

export default function Membership() {
  // State untuk mengontrol menu mana saja yang sedang terbuka
  const [openLevel, setOpenLevel] = React.useState(false);
  const [openPoin, setOpenPoin] = React.useState(false);
  const [openReferral, setOpenReferral] = React.useState(false);
  
  // State bantuan untuk animasi tombol salin kode referral
  const [copied, setCopied] = React.useState(false);

  const handleCopyReferral = () => {
    navigator.clipboard.writeText("VET-PUTRI-2026");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Header Menu */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
          Program Membership Klinik
        </h1>
        <p className="text-gray-500 text-sm">
          Kelola tingkatan keanggotaan, pantau poin reward, dan bagikan kode referral Anda.
        </p>
      </div>

      {/* Wrapper Induk Menu */}
      <div className="space-y-4">
        
        {/* ================= 1. LEVEL MEMBER ================= */}
        <Collapsible open={openLevel} onOpenChange={setOpenLevel} className="border rounded-xl bg-white shadow-sm overflow-hidden">
          <CollapsibleTrigger asChild>
            <button className="flex items-center justify-between w-full p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-50 rounded-lg text-amber-600 border border-amber-100">
                  <Crown className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-base">Level Member</span>
                  <span className="text-xs text-amber-600 font-medium">Status saat ini: Gold Member</span>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openLevel ? "transform rotate-180" : ""}`} />
            </button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="p-5 border-t bg-gray-50/50 space-y-3 text-sm text-gray-600">
            <p>Selamat! Anda berada di tingkat <strong>Gold Member</strong>. Nikmati keuntungan eksklusif di setiap kunjungan anabul Anda.</p>
            <div className="bg-white p-4 border rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-700 mb-2">Benefit Gold Member:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Diskon 10% untuk layanan Pemeriksaan Umum & USG.</li>
                <li>Prioritas antrean tanpa antre lama via aplikasi.</li>
                <li>Grooming gratis 1x setiap akumulasi 5x kedatangan.</li>
              </ul>
            </div>
          </CollapsibleContent>
        </Collapsible>


        {/* ================= 2. POIN REWARD ================= */}
        <Collapsible open={openPoin} onOpenChange={setOpenPoin} className="border rounded-xl bg-white shadow-sm overflow-hidden">
          <CollapsibleTrigger asChild>
            <button className="flex items-center justify-between w-full p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 border border-emerald-100">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-base">Poin Reward</span>
                  <span className="text-xs text-emerald-600 font-medium">Total: 1.250 Poin</span>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openPoin ? "transform rotate-180" : ""}`} />
            </button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="p-5 border-t bg-gray-50/50 space-y-4 text-sm text-gray-600">
            <p>Kumpulkan terus poin reward dari setiap transaksi transaksi medis, obat, maupun operasi pengangkatan cyst hewan kesayangan Anda.</p>
            
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white p-4 border rounded-lg shadow-sm flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-400 block">Dapat Ditukar</span>
                  <span className="text-lg font-bold text-gray-800">2x Voucher Grooming</span>
                </div>
                <Button size="sm" variant="outline">Tukar</Button>
              </div>
              <div className="bg-white p-4 border rounded-lg shadow-sm flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-400 block">Dapat Ditukar</span>
                  <span className="text-lg font-bold text-gray-800">Potongan Rp 50.000</span>
                </div>
                <Button size="sm" variant="outline">Tukar</Button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>


        {/* ================= 3. REFERRAL ================= */}
        <Collapsible open={openReferral} onOpenChange={setOpenReferral} className="border rounded-xl bg-white shadow-sm overflow-hidden">
          <CollapsibleTrigger asChild>
            <button className="flex items-center justify-between w-full p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 border border-indigo-100">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-base">Referral</span>
                  <span className="text-xs text-gray-400 font-normal">Undang teman & dapatkan komisi poin</span>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openReferral ? "transform rotate-180" : ""}`} />
            </button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="p-5 border-t bg-gray-50/50 space-y-3 text-sm text-gray-600">
            <p>Bagikan kode referral unik Anda kepada sesama pemilik hewan peliharaan. Ketika mereka mendaftar dan berobat pertama kali, Anda berdua akan mendapatkan bonus <strong>200 Poin</strong>!</p>
            
            <div className="bg-white p-3 border rounded-lg flex items-center justify-between max-w-md">
              <div>
                <span className="text-[10px] text-gray-400 block uppercase font-bold tracking-wider">Kode Anda</span>
                <span className="text-base font-mono font-bold text-indigo-600">VET-PUTRI-2026</span>
              </div>
              <Button size="sm" variant="ghost" onClick={handleCopyReferral} className="h-9 w-24 gap-1.5">
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-green-600">Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Salin</span>
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