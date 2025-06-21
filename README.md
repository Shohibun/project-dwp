# 🚀 Proyek E-commerce Pembelian Paket Data

Ini adalah hasil technical test untuk pembuatan prototype aplikasi e-commerce pembelian paket data internet menggunakan React dan JSON Server.

---

## 🕒 Waktu Pengerjaan

**Tanggal: 20 Juni 2025**

- 15:50 - 17:05 WIB → Memahami soal technical test
- 17:05 - 17:40 WIB → Setup React (Vite), install Tailwind CSS
- 19:00 - 21:43 WIB → Install MUI, buat halaman: Navbar, Login, Home, Customer, Transaction

**Tanggal: 21 Juni 2025**

- 08:34 - 09:51 WIB → Page Not Found, Logout, fitur CRUD
- 09:52 - 10:22 WIB → Responsive Mobile, Update Navbar
- 10:22 - 11:32 WIB → Menambahkan komentar kode
- 12:15 - 13:12 WIB → Menambahkan komentar kode lanjutan

## 📦 Fitur Utama

✅ Login Page (admin/123456)  
✅ Dashboard Ringkasan  
✅ Customer Management (CRUD)  
✅ Transaction Management (CRUD)  
✅ Logout dan Proteksi Routing  
✅ UI responsif menggunakan MUI (Material UI)

## 📁 Struktur Project

```
project-dwp/
├── internet-package/ ← berisi React app
│ ├── src/
│ ├── public/
│ └── package.json
├── internet-package-server ← mock API untuk json-server
│ ├── db.json
├── README.md ← penjelasan cara menjalankan project
```

## 🔗 FrontEnd GitHub

https://github.com/Shohibun/internet-package.git

## ⚙️ Cara Menjalankan Aplikasi

### 1. Clone / Download Project

```bash
git clone https://github.com/Shohibun/project-dwp.git
cd project-dwp

```

### 2. Jalankan Backend Mock API (json-server)

```bash
npm install -g json-server
cd internet-package-server
json-server --watch db.json --port 3001

```

### 3. Jalankan Frontend React Vite

```bash
cd ../internet-package
npm install
npm run dev

```

## 🔐 Login

Gunakan akun berikut untuk masuk:

```makefile
Username: admin
Password: 123456

```

## 🔗 API JSON Server Otomatis

| Resource     | Endpoint                             |
| ------------ | ------------------------------------ |
| Customers    | `http://localhost:3001/customers`    |
| Transactions | `http://localhost:3001/transactions` |
| Packages     | `http://localhost:3001/packages`     |

## 📌 Catatan Tambahan

Tidak menggunakan autentikasi real (hanya simulasi dengan localStorage)

Layout menggunakan Material UI

Semua data disimpan di file db.json via json-server
