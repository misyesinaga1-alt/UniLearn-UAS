# UniLearn — E-Learning Kampus 🎓

![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-SDK_54-000020?style=flat&logo=expo&logoColor=white)
![AsyncStorage](https://img.shields.io/badge/AsyncStorage-Local_Persistence-00b894)

> UniLearn adalah aplikasi mobile e-learning sederhana untuk mahasiswa. 
> Aplikasi ini membantu mahasiswa melihat daftar mata kuliah, mempelajari detail materi, menyimpan progress belajar, serta mengunggah foto tugas secara lokal menggunakan perangkat mobile.

---

# 📸 Screenshots

| Login Screen | Home Screen | Feature Screen |
|:---:|:---:|:---:|
| ![Login](Login1.jpeg) | ![Home](Home2.jpeg) | ![Feature](Feature3.jpeg) |

## Upload Tugas

![Upload](Upload4.jpeg)

## Profil Mahasiswa

![Profile](Profile5.jpeg)

---

# ✨ Fitur Utama

- [x] Login mahasiswa dengan validasi form
- [x] Penyimpanan data login menggunakan AsyncStorage
- [x] Dashboard daftar mata kuliah menggunakan FlatList
- [x] Detail mata kuliah menggunakan Stack Navigation
- [x] Progress belajar tersimpan secara lokal
- [x] Upload foto tugas menggunakan expo-image-picker
- [x] Riwayat upload tugas menggunakan AsyncStorage
- [x] Profil mahasiswa dan fitur logout
- [x] Bottom Tab Navigation
- [x] Conditional rendering loading dan empty state

---

# 🛠️ Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | React Native + Expo SDK 54 |
| Language | JavaScript |
| Navigation | React Navigation v7 (Stack + Bottom Tab) |
| Storage | AsyncStorage |
| Device Feature | expo-image-picker |
| Build | EAS Build (Expo Application Services) |

---

# 📱 Fitur Teknis yang Diimplementasikan

## 1. useState + Conditional Rendering

Digunakan untuk:
- menyimpan input login
- mengatur error validasi
- mengatur loading data
- mengatur status progress belajar
- menampilkan empty state ketika data kosong

---

## 2. React Navigation

Navigasi aplikasi menggunakan:

### Stack Navigation

Digunakan untuk:
- Login Screen
- Detail Mata Kuliah

### Bottom Tab Navigation

Digunakan untuk:
- Beranda
- Progres
- Profil

---

## 3. FlatList

FlatList digunakan untuk menampilkan:

- Daftar mata kuliah
- Riwayat upload tugas

Dengan:

- keyExtractor
- renderItem
- ListEmptyComponent

---

## 4. AsyncStorage CRUD

Data yang disimpan secara lokal:

### User

Menyimpan:
- Nama mahasiswa
- NIM

### Progress

Menyimpan:
- Status selesai belajar mata kuliah

### Tugas

Menyimpan:
- Foto tugas
- Tanggal upload

Data tetap tersedia walaupun aplikasi ditutup.

---

## 5. Form Validation

Login memiliki validasi:

- NIM wajib diisi
- Nama wajib diisi
- Minimal panjang NIM

Pesan error akan tampil jika input tidak sesuai.

---

## 6. Device Feature

Menggunakan:

`expo-image-picker`

Untuk:

- meminta izin akses galeri
- memilih foto tugas
- menyimpan URI foto

---

# 🚀 Cara Menjalankan Project

Clone repository:

```bash
git clone https://github.com/misyesinaga1-alt/UniLearn-UAS.git
