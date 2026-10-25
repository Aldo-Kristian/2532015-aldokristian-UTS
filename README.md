# Campus Hub — UTS Pemrograman Mobile

Aplikasi mobile berbasis React Native dan Expo yang dikembangkan sebagai proyek Ujian Tengah Semester (UTS) mata kuliah Lab. Pemrograman Mobile di Universitas Internasional Batam.

Campus Hub mendemonstrasikan penggunaan reusable components, dynamic props, state management, real-time search, dan rendering data menggunakan FlatList.

## Features

### 1. Task Dashboard
- Menampilkan daftar tugas menggunakan komponen `InfoCard` yang reusable.
- Menerima data dinamis melalui props `title`, `status`, dan `onPress`.
- Menampilkan indikator status dengan warna berbeda:
  - **Selesai:** hijau
  - **Proses:** oranye
- Menyediakan tombol **Lihat Detail** untuk menampilkan informasi tugas.

### 2. Student Directory
- Menampilkan daftar mahasiswa dari static dataset.
- Mendukung pencarian nama secara real-time.
- Pencarian tidak membedakan huruf besar dan kecil.
- Menggunakan `FlatList` untuk menampilkan data mahasiswa.
- Menampilkan pesan `Data tidak ditemukan!` ketika tidak ada hasil yang cocok.

## Tech Stack

- **React Native** — Mobile application framework
- **Expo** — Development and application tooling
- **JavaScript** — Application logic
- **React Hooks** — State management with `useState`
- **React Native Safe Area Context** — Safe area handling

## Project Structure

```text
2532015-aldokristian-UTS/
├── App.js
├── index.js
├── package.json
├── app.json
└── src/
    └── components/
        └── InfoCard.js
```

## Getting Started

### Prerequisites

- Node.js and npm
- Expo-compatible development environment
- Expo Go on a compatible mobile device, or an Android emulator

### Installation

1. Clone the repository:

   ```bash
   git clone <YOUR_GITHUB_REPOSITORY_URL>
   ```

2. Enter the project directory:

   ```bash
   cd 2532015-aldokristian-UTS
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the Expo development server:

   ```bash
   npx expo start
   ```

5. Scan the QR code using Expo Go, or open the project in a supported emulator.

## Learning Objectives

This project demonstrates the implementation of:

- Reusable React Native components and props.
- Conditional rendering and styling based on status values.
- Event handling with `TouchableOpacity`.
- React state management using `useState`.
- Controlled text inputs with `TextInput`.
- Case-insensitive filtering using `filter()` and `toLowerCase()`.
- List rendering with `FlatList`, `keyExtractor`, and `ListEmptyComponent`.

## Academic Information

| Detail | Information |
|---|---|
| Institution | Universitas Internasional Batam |
| Faculty | Faculty of Computer Science |
| Study Program | Information Technology |
| Course | Lab. Pemrograman Mobile |
| Assessment | Midterm Examination (UTS) |
| Academic Year | 2026/2027 |

## Author

**Aldo Kristian**

Information Technology Student  
Universitas Internasional Batam

---

Developed for academic learning and practical assessment purposes.