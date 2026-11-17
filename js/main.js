// JavaScript portofolio Tyass - Modul P1-W07
// File ini dipasang pada setiap halaman dengan atribut defer.

// 1. Array of objects: daftar keahlian
const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" }
];

console.table(skills);
const sedangDipelajari = skills.filter((skill) => skill.level === "Dasar");
console.log("Keahlian yang sedang dipelajari:", sedangDipelajari.map((skill) => skill.nama));

// 2. DOM: tampilkan keahlian hanya pada halaman yang memiliki wadahnya.
const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

if (daftarSkill && jumlahSkill) {
  skills.forEach((skill) => {
    const item = document.createElement("li");
    item.className = "skill-item";
    item.textContent = `${skill.nama} (${skill.level})`;
    daftarSkill.appendChild(item);
  });
  jumlahSkill.textContent = `Ada ${skills.length} keahlian yang sedang saya kembangkan.`;
}

// 3. Event click: tombol tema berlaku pada semua halaman.
const tombolTema = document.querySelector("#tombol-tema");
if (tombolTema) {
  tombolTema.addEventListener("click", () => {
    document.body.classList.toggle("gelap");
    const temaGelap = document.body.classList.contains("gelap");
    tombolTema.textContent = temaGelap ? "Mode Terang" : "Mode Gelap";
  });
}

// 4. Event input: penghitung karakter pada halaman Kontak.
const kotakPesan = document.querySelector("#pesan");
const hitungKarakter = document.querySelector("#hitung-karakter");
if (kotakPesan && hitungKarakter) {
  const perbaruiHitungan = () => {
    hitungKarakter.textContent = `${kotakPesan.value.length}/300 karakter`;
  };
  kotakPesan.addEventListener("input", perbaruiHitungan);
  perbaruiHitungan();
}

// Form kontak demo lokal: tidak mengirim data ke server.
const formKontak = document.querySelector("#form-kontak");
if (formKontak) {
  formKontak.addEventListener("submit", (event) => {
    event.preventDefault();
    const nama = document.querySelector("#nama-kontak").value.trim();
    const pesan = kotakPesan.value.trim();
    document.querySelector("#hasil-kontak").textContent =
      `Terima kasih, ${nama}. Pesanmu sudah ditampilkan di halaman ini.`;
    console.log("Pesan kontak:", { nama, pesan });
  });
}

// 5. Data proyek: array of objects.
const proyek = [
  { judul: "Halaman Profil Digital", kategori: "HTML", simbol: "👤", deskripsi: "Halaman profil pribadi dengan struktur HTML semantik." },
  { judul: "Form Kontak", kategori: "HTML", simbol: "✉️", deskripsi: "Formulir kontak dengan input nama dan pesan." },
  { judul: "Tabel Jadwal Belajar", kategori: "HTML", simbol: "📅", deskripsi: "Latihan menyusun informasi jadwal dalam halaman web." },
  { judul: "Portofolio Responsif", kategori: "CSS", simbol: "📱", deskripsi: "Tampilan portofolio yang menyesuaikan ukuran layar." },
  { judul: "Kalkulator Nilai Rapor", kategori: "JavaScript", simbol: "🧮", deskripsi: "Menghitung rata-rata, predikat, status KKM, dan kehadiran." },
  { judul: "Lima Soal Logika", kategori: "JavaScript", simbol: "💡", deskripsi: "Latihan fungsi ganjil-genap, suhu, nilai terbesar, tahun kabisat, dan diskon." }
];

const daftarProyek = document.querySelector("#daftar-proyek");
const jumlahProyek = document.querySelector("#jumlah-proyek");

function buatKartu(item) {
  return `
    <article class="project-card">
      <div class="project-symbol" aria-hidden="true">${item.simbol}</div>
      <span class="project-label">${item.kategori}</span>
      <h2>${item.judul}</h2>
      <p>${item.deskripsi}</p>
    </article>`;
}

function tampilkanProyek(daftar) {
  if (!daftarProyek || !jumlahProyek) return;
  const semuaKartu = daftar.map((item) => buatKartu(item));
  daftarProyek.innerHTML = semuaKartu.join("");
  jumlahProyek.textContent = `Menampilkan ${daftar.length} dari ${proyek.length} proyek`;
}

function pasangFilter(idTombol, kategori) {
  const tombol = document.querySelector(idTombol);
  if (!tombol) return;
  tombol.addEventListener("click", () => {
    const hasilFilter = kategori === "Semua"
      ? proyek
      : proyek.filter((item) => item.kategori === kategori);
    tampilkanProyek(hasilFilter);

    document.querySelectorAll(".filter-button").forEach((button) => {
      const aktif = button === tombol;
      button.classList.toggle("active", aktif);
      button.setAttribute("aria-pressed", String(aktif));
    });
  });
}

if (daftarProyek && jumlahProyek) {
  tampilkanProyek(proyek);
  pasangFilter("#filter-semua", "Semua");
  pasangFilter("#filter-html", "HTML");
  pasangFilter("#filter-css", "CSS");
  pasangFilter("#filter-javascript", "JavaScript");
}
