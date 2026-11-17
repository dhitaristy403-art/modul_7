// Kalkulator Rapor - logika JavaScript
const formRapor = document.querySelector("#formRapor");
const hasilRapor = document.querySelector("#hasilRapor");

const hitungRataRata = (tugas, uts, uas) => (tugas + uts + uas) / 3;

function predikat(nilai) {
  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  return "D";
}

function rapor(namaSiswa, tugas, uts, uas) {
  const rata = hitungRataRata(tugas, uts, uas);
  return `${namaSiswa}: rata-rata ${rata.toFixed(1)}, predikat ${predikat(rata)}`;
}

if (formRapor && hasilRapor) {
  formRapor.addEventListener("submit", (event) => {
    event.preventDefault();

    const namaSiswa = document.querySelector("#namaSiswa").value.trim();
    const kelasSiswa = document.querySelector("#kelasSiswa").value.trim();
    const tugas = Number(document.querySelector("#nilaiTugas").value);
    const uts = Number(document.querySelector("#nilaiUts").value);
    const uas = Number(document.querySelector("#nilaiUas").value);
    const kehadiran = Number(document.querySelector("#kehadiran").value);
    const semuaAngka = [tugas, uts, uas, kehadiran];
    const inputValid = semuaAngka.every((angka) =>
      Number.isFinite(angka) && angka >= 0 && angka <= 100
    );

    if (!namaSiswa || !kelasSiswa || !inputValid) {
      alert("Isi semua data dengan benar. Nilai dan kehadiran harus 0 sampai 100.");
      return;
    }

    const rataRata = hitungRataRata(tugas, uts, uas);
    const lulus = rataRata >= 75;
    const dapatSertifikat = lulus && kehadiran >= 80;

    document.querySelector("#hasilNama").textContent = namaSiswa;
    document.querySelector("#hasilKelas").textContent = kelasSiswa;
    document.querySelector("#hasilRata").textContent = rataRata.toFixed(1);
    document.querySelector("#hasilPredikat").textContent = predikat(rataRata);
    document.querySelector("#hasilStatus").textContent = lulus ? "Lulus KKM" : "Belum lulus";
    document.querySelector("#hasilHadir").textContent = `${kehadiran}%`;
    document.querySelector("#hasilSertifikat").textContent = dapatSertifikat ? "Memenuhi syarat" : "Belum memenuhi";
    document.querySelector("#pesanHasil").textContent = lulus
      ? "Selamat, kamu lulus KKM! Tetap pertahankan prestasimu."
      : "Tetap semangat, kamu perlu mengikuti remedial.";

    hasilRapor.hidden = false;
    hasilRapor.scrollIntoView({ behavior: "smooth", block: "nearest" });
    console.log(rapor(namaSiswa, tugas, uts, uas));
    console.log(`Lulus KKM: ${lulus}`);
    console.log(`Dapat sertifikat: ${dapatSertifikat}`);
  });
}

const inputFoto = document.querySelector("#fotoSiswa");
if (inputFoto) {
  inputFoto.addEventListener("change", () => {
    const fileFoto = inputFoto.files[0];
    if (!fileFoto) return;
    if (!fileFoto.type.startsWith("image/")) {
      alert("Pilih file gambar, ya.");
      inputFoto.value = "";
      return;
    }
    const previewFoto = document.querySelector("#previewFoto");
    previewFoto.src = URL.createObjectURL(fileFoto);
    previewFoto.hidden = false;
    document.querySelector("#photoPlaceholder").hidden = true;
  });
}
