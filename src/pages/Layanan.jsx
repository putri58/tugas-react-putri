import React, { useRef, useState } from "react";
import {
  Stethoscope,
  Activity,
  HeartPulse,
  ShieldAlert,
  Scissors,
  Syringe,
  Sparkles,
  ClipboardCheck
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
  ItemGroup,
  ItemSeparator
} from "../components/ui/item";

const layananData = [
  {
    id: 1,
    nama: "Pemeriksaan Umum",
    deskripsi:
      "Pemeriksaan kondisi kesehatan hewan secara menyeluruh oleh dokter hewan berpengalaman.",
    harga: "Rp 50.000",
    icon: Stethoscope,
    status: "Tersedia"
  },
  {
    id: 2,
    nama: "Deteksi & Analisis Cyst",
    deskripsi:
      "Pemeriksaan sitologi dan identifikasi karakteristik jenis cyst pada jaringan luar hewan.",
    harga: "Rp 150.000",
    icon: ShieldAlert,
    status: "Tersedia"
  },
  {
    id: 3,
    nama: "USG & Rontgen Hewan",
    deskripsi:
      "Pemeriksaan radiologi mendalam menggunakan alat USG mutakhir untuk mendeteksi organ dalam.",
    harga: "Rp 250.000",
    icon: Activity,
    status: "Tersedia"
  },
  {
    id: 4,
    nama: "Operasi Pengangkatan Cyst",
    deskripsi:
      "Tindakan bedah minor/mayor steril untuk mengangkat cyst berbahaya pada tubuh hewan.",
    harga: "Rp 1.500.000",
    icon: HeartPulse,
    status: "Butuh Janji Temu"
  },
  {
    id: 5,
    nama: "Kontrol Pasca Operasi",
    deskripsi:
      "Pembersihan luka, pelepasan jahitan, dan evaluasi berkala pasca tindakan operasi bedah.",
    harga: "Rp 75.000",
    icon: ClipboardCheck,
    status: "Tersedia"
  },
  {
    id: 6,
    nama: "Vaksinasi & Antibodi",
    deskripsi:
      "Layanan pemberian vaksin inti (F3/F4/Rabies) untuk memperkuat imun dan menjaga kesehatan hewan.",
    harga: "Rp 100.000",
    icon: Syringe,
    status: "Tersedia"
  },
  {
    id: 7,
    nama: "Grooming Medis & Kutu",
    deskripsi:
      "Pemandian khusus dengan sampo anti-jamur, kutu, dan pembersihan telinga hewan.",
    harga: "Rp 85.000",
    icon: Scissors,
    status: "Tersedia"
  },
  {
    id: 8,
    nama: "Rawat Inap & Isolasi Intensif",
    deskripsi:
      "Fasilitas perawatan inap 24 jam dengan monitoring ketat dari paramedis dan dokter jaga.",
    harga: "Rp 120.000 / Hari",
    icon: Sparkles,
    status: "Kamar Terbatas"
  }
];

export default function Layanan() {
  const layananRef = useRef(null);
  const clickCountRef = useRef(0);
  const [clickCount, setClickCount] = useState(0);

  const handlePilih = () => {
    clickCountRef.current += 1;
    setClickCount(clickCountRef.current);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
          Layanan Klinik Dokter Hewan
        </h1>

        <p className="text-muted-foreground text-gray-500">
          Daftar penanganan medis, operatif, dan perawatan preventif untuk
          hewan peliharaan Anda.
        </p>

        {/* Counter Klik */}
        <div className="mt-4 inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-lg">
          <span className="text-sm font-medium text-emerald-700">
            Total layanan dipilih:
          </span>

          <span className="font-bold text-emerald-600">
            {clickCount} kali
          </span>
        </div>
      </div>

      {/* Membungkus seluruh deretan daftar menggunakan ItemGroup agar menyatu rapi */}
      <div
        ref={layananRef}
        className="bg-white border rounded-xl shadow-sm p-4"
      >
        <ItemGroup>
          {layananData.map((layanan, index) => {
            const IconKomponen = layanan.icon;

            return (
              <React.Fragment key={layanan.id}>
                <Item
                  variant="default"
                  size="default"
                  className="py-4 px-2 hover:bg-gray-50/80 transition-colors rounded-lg"
                >
                  {/* Media */}
                  <ItemMedia
                    variant="icon"
                    className="text-emerald-600 bg-emerald-50 p-2.5 rounded-lg border border-emerald-100"
                  >
                    <IconKomponen className="w-5 h-5" />
                  </ItemMedia>

                  {/* Konten */}
                  <ItemContent>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <ItemTitle className="text-base font-semibold text-gray-900">
                        {layanan.nama}
                      </ItemTitle>

                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                          layanan.status === "Tersedia"
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {layanan.status}
                      </span>
                    </div>

                    <ItemDescription className="text-sm text-gray-500 max-w-2xl leading-relaxed">
                      {layanan.deskripsi}
                    </ItemDescription>
                  </ItemContent>

                  {/* Actions */}
                  <ItemActions className="flex items-center gap-4 sm:flex-row flex-col">
                    <div className="text-right sm:min-w-[120px]">
                      <span className="text-xs text-gray-400 block font-medium">
                        Biaya Layanan
                      </span>

                      <span className="text-emerald-600 font-bold text-base whitespace-nowrap">
                        {layanan.harga}
                      </span>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="font-medium"
                      onClick={handlePilih}
                    >
                      Pilih
                    </Button>
                  </ItemActions>
                </Item>

                {/* Garis pemisah antar item */}
                {index < layananData.length - 1 && (
                  <ItemSeparator className="my-1 border-gray-100" />
                )}
              </React.Fragment>
            );
          })}
        </ItemGroup>
      </div>
    </div>
  );
}