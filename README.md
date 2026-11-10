# STARBOY Hoodie Store

Website katalog hoodie streetwear dengan tampilan responsive dan pemesanan langsung melalui WhatsApp.

## File
- `index.html` — struktur halaman
- `style.css` — desain dan responsive layout
- `script.js` — form pemesanan WhatsApp
- `supabase-setup.sql` — tabel pesanan opsional untuk pengembangan berikutnya

## Pengaturan sebelum dipublikasikan
1. Periksa harga, nama produk, stok, ukuran, warna, dan foto produk di `index.html`.
2. Nomor WhatsApp sudah diatur ke `0851 3575 1969` melalui format internasional `6285135751969` di `script.js`.
3. Foto saat ini memakai gambar referensi dari Unsplash. Ganti dengan foto produk asli agar pelanggan tidak salah mengira foto contoh sebagai produk yang dijual.

## Deploy ke GitHub dan Vercel
1. Ekstrak ZIP ini.
2. Buat repository baru di GitHub.
3. Upload seluruh isi folder (bukan folder ZIP-nya) ke repository.
4. Buka Vercel, pilih **Add New → Project**, lalu import repository GitHub tersebut.
5. Untuk website statis ini, tidak perlu mengisi Build Command atau Output Directory. Klik **Deploy**.
6. Setiap perubahan yang di-push ke branch utama GitHub akan memicu deployment baru di Vercel.

## Catatan Supabase
Pemesanan saat ini langsung membuka WhatsApp dan tidak menyimpan data ke Supabase. SQL disediakan sebagai dasar jika nanti ingin menambahkan penyimpanan pesanan. Jangan pernah menaruh `service_role key` Supabase di JavaScript frontend.
