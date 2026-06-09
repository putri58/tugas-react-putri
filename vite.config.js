import { defineConfig } from "vite";
import react from "@vitejs/react-vite"; // atau @vitejs/plugin-react (sesuaikan dengan bawaanmu)

// 🌟 TAMBAHKAN BARIS INI DI ATAS:
import path from "path"; 

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Baris di bawah inilah yang memicu eror jika 'path' tidak di-import di atas
      "@": path.resolve(__dirname, "./src"), 
    },
  },
});