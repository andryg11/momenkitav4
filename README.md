# MomenKita Dashboard Editor V2

Versi ini dibuat ulang sebagai aplikasi undangan digital dengan alur dashboard seperti platform undangan profesional.

## Alur aplikasi
1. Landing page
2. Login / daftar
3. Setup data awal undangan
4. Pilih paket
5. Dashboard
6. Editor undangan dengan menu:
   - Pengantin / Data Utama
   - Acara
   - Tema
   - Galeri
   - Musik
   - Amplop
   - Kado
   - RSVP
   - Live Streaming
   - Kisah Cinta
   - Story IG
   - Quote
   - Setting
   - Buku Tamu
   - Kirim
   - Event Planner
7. Preview halaman undangan publik
8. Share WhatsApp dan link personal tamu

## Catatan
Ini frontend demo aktif memakai localStorage, supaya bisa langsung jalan di Cloudflare Pages tanpa backend.

Untuk produksi nyata perlu integrasi:
- Firebase Auth
- Firestore
- Cloudflare R2
- Midtrans
- Worker/API backend

## Deploy Cloudflare Pages via GitHub
- Framework preset: None
- Build command: kosongkan
- Build output directory: public


## Update No Mockup
- Template 5–50 tidak lagi menggunakan mockup HP.
- Semua template sekarang tampil sebagai mini desain undangan asli.
- Preview tema memakai struktur undangan: cover, nama acara, tanggal, info lokasi, orang, ornamen, dan tombol.


## V3 Dynamic Template Update
Versi ini memperbarui konsep template:
- 10 template pertama memakai preview gambar full-style seperti contoh yang diminta.
- Template tidak hanya menjadi gambar mati: halaman undangan publik dibuat dinamis.
- Nama, tanggal, lokasi, pembuka, RSVP, Maps, dan data acara tetap bisa diedit lewat dashboard.
- Gambar template dipakai sebagai preview dan visual background lembut, sedangkan teks utama di-render dinamis dari data pengguna.
- Template 11–50 tetap tersedia sebagai desain CSS/ornamen tanpa mockup HP, untuk dikembangkan batch berikutnya menjadi full-style image.


## V3.1 Exact Demo Fix
- Saat klik Lihat Demo pada template bergambar, cover demo sekarang memakai gambar template yang sama persis.
- Detail acara, Maps, galeri, dan RSVP tetap berada di bawah cover sebagai bagian dinamis.
- Catatan: teks di dalam gambar cover belum bisa diedit langsung karena masih menyatu di image. Data dinamis tampil di section bawah.
