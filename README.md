# Web Administrasi dan Monitoring SPPD TVRI DIY

## Deskripsi Singkat

Aplikasi ini adalah **Web Administrasi dan Monitoring Perjalanan Dinas** yang dikembangkan khusus untuk **TVRI DIY**. Sistem ini berfungsi sebagai platform digital untuk mengelola seluruh siklus administrasi perjalanan dinas pegawai.

Fitur dan kegunaan utama meliputi:
- **Administrasi SPPD**: Pengelolaan pengajuan dan penerbitan Surat Perintah Perjalanan Dinas.
- **Monitoring**: Pemantauan status perjalanan dinas yang sedang berlangsung maupun yang telah selesai.
- **Pelaporan**: Mempermudah proses pelaporan dan rekapitulasi data perjalanan dinas untuk keperluan internal TVRI DIY.

Aplikasi ini (Frontend) dirancang untuk memberikan antarmuka yang ramah pengguna (user-friendly) guna meningkatkan efisiensi dan transparansi birokrasi perjalanan dinas.

## Instalasi

Berikut adalah langkah-langkah untuk menginstal dan menjalankan proyek ini di komputer lokal (Local Environment).

### Prasyarat

Pastikan perangkat lunak berikut sudah terinstal di komputer Anda:
- [Node.js](https://nodejs.org/) (Disarankan versi LTS terbaru)
- NPM (Node Package Manager)

### Langkah-langkah

1. **Clone Project**
   Buka terminal atau Command Prompt, lalu arahkan ke folder proyek:
   ```bash
   git clone https://github.com/code-worker-me/fe-sppd-diy.git
   ```

2. **Instal Dependensi**
   Jalankan perintah berikut untuk mengunduh semua pustaka (library) yang diperlukan:
   ```bash
   npm install
   ```

3. **Jalankan Aplikasi (Mode Pengembangan)**
   Untuk memulai server pengembangan lokal:
   ```bash
   npm start
   ```
   *Catatan: Jika perintah di atas tidak berjalan, silakan periksa bagian `scripts` di dalam file `package.json`. Kemungkinan perintah yang digunakan adalah `npm run dev` atau `npm run serve`.*

4. **Build untuk Produksi**
   Jika ingin membuat versi aplikasi yang siap untuk di-deploy ke server produksi:
   ```bash
   npm run build
   ```