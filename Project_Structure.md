# 📂 Struktur Proyek: Go Reserve - Sistem Booking Ruangan FILKOM

Dokumen ini memuat pemetaan struktur direktori dan *file* penting dalam repositori untuk mempermudah proses *containerization* (Docker) dan *pipeline automations* (Jenkins).

Aplikasi ini dibangun menggunakan ekosistem **Bun**, **Vite (TanStack/React)**, dan basis data **PostgreSQL (Prisma)**.

## 📁 Detail Direktori `src/` (Source Code)

Di dalam `src/`, aplikasi dibagi berdasarkan fitur (*Feature-Sliced Design*):
* **`src/features/`** : Modul logika terpisah untuk masing-masing entitas aplikasi, meliputi:
    * `/auth` : Logika autentikasi dan *login* akun UB.
    * `/rooms` : Logika pengelolaan data ruangan.
    * `/reservations` : Logika pemesanan (*booking*) dan validasi jadwal bentrok.
    * `/users` : Logika manajemen pengguna (Admin/Student).
* **`src/routes/`** : Konfigurasi rute halaman *website* menggunakan TanStack Router (misal: halaman `/login`, `/admin`, dll).

## 📄 File Konfigurasi Penting di Root

* **`package.json` & `bun.lock`** : Daftar dependensi paket dan *scripts* utama untuk menjalankan aplikasi (termasuk *script* `test` untuk Jenkins).
* **`.env.example`** : *Template* environment variables yang wajib disiapkan di server AWS (*database URL*, *secret key*, dll).
* **`vite.config.ts`** : Konfigurasi *build tool* dan *server* aplikasi.
* **`deploy.sh`** : Skrip untuk eksekusi penarikan kontainer di server AWS.
* **`Jenkinsfile`** : Skrip tahapan CI/CD.