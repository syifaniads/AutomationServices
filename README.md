# 🏢 Go Reserve - Sistem Booking Ruangan FILKOM

Tim
- Syifani Adillah Salsabila (235150207111052)
- Latifa Anggia Fitriana (235150201111062)
- Jonathan Salim (235150207111065)

Sistem Booking Ruangan FILKOM adalah aplikasi berbasis web yang dirancang untuk memfasilitasi sivitas akademika Universitas Brawijaya dalam melakukan pemesanan ruangan secara terintegrasi. Proyek ini diimplementasikan dengan *pipeline* CI/CD otomatis.

## ✨ Fitur Utama
- **Autentikasi Aman:** Login eksklusif menggunakan akun Universitas Brawijaya (OAuth).
- **Manajemen Ruangan:** Pengecekan ketersediaan dan pemesanan ruangan secara *real-time*.
- **Validasi Cerdas:** Pencegahan bentrok jadwal (Double Booking).
- **Dashboard Role-Based:** Antarmuka khusus untuk Admin dan Mahasiswa/Student.

## 🏗️ Arsitektur CI/CD
Proyek ini menggunakan arsitektur *deployment* otomatis:
`GitHub (Source Code) -> Webhook Trigger -> Jenkins (Build & Test) -> Docker Hub (Image Registry) -> AWS EC2 (Production Server)`

## 🚀 Panduan Setup Lokal (Local Development)

1. **Clone repository:**
   ```bash
   git clone [https://github.com/syifaniads/AutomationServices.git](https://github.com/syifaniads/AutomationServices.git)
   cd AutomationServices

2. **Install dependencies:**
   ```bash
   bun install

3. **Setup Environment:**
   Gandakan file .env.example menjadi .env dan isi variabel koneksi database PostgreSQL.

4. **Setup Database:**
   ```bash
   bun run db:push
   bun run db:seed

5. **Jalankan Aplikasi:**
   ```bash
   bun dev