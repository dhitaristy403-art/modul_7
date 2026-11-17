console.log("================================");
console.log("     TYAS.DEV - JAVASCRIPT");
console.log("================================");


// 1. MENENTUKAN GANJIL ATAU GENAP

function ganjilGenap(angka) {
    if (angka % 2 === 0) {
        return "genap";
    } else {
        return "ganjil";
    }
}

console.log("\n1. GANJIL GENAP");
console.log(ganjilGenap(7));   // ganjil
console.log(ganjilGenap(12));  // genap
console.log(ganjilGenap(0));   // genap


// 2. CELSIUS KE FAHRENHEIT

const celsiusKeFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
};

console.log("\n2. CELSIUS KE FAHRENHEIT");
console.log(celsiusKeFahrenheit(0));    // 32
console.log(celsiusKeFahrenheit(100));  // 212
console.log(celsiusKeFahrenheit(-40));  // -40


// 3. MENCARI NILAI TERBESAR

function nilaiTerbesar(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log("\n3. NILAI TERBESAR");
console.log(nilaiTerbesar(5, 9, 2));       // 9
console.log(nilaiTerbesar(80, 75, 80));    // 80
console.log(nilaiTerbesar(-3, -7, -1));    // -1


// 4. MENENTUKAN TAHUN KABISAT

function tahunKabisat(tahun) {
    if (
        (tahun % 4 === 0 && tahun % 100 !== 0) ||
        tahun % 400 === 0
    ) {
        return true;
    } else {
        return false;
    }
}

console.log("\n4. TAHUN KABISAT");
console.log(tahunKabisat(2024));  // true
console.log(tahunKabisat(2026));  // false
console.log(tahunKabisat(1900));  // false
console.log(tahunKabisat(2000));  // true


// 5. MENGHITUNG HARGA SETELAH DISKON

function hargaSetelahDiskon(total) {
    if (total >= 200000) {
        return total - (total * 20 / 100);
    } else if (total >= 100000) {
        return total - (total * 10 / 100);
    } else {
        return total;
    }
}

console.log("\n5. HARGA SETELAH DISKON");
console.log(hargaSetelahDiskon(250000));  // 200000
console.log(hargaSetelahDiskon(100000));  // 90000
console.log(hargaSetelahDiskon(75000));   // 75000


// =================================
// PENGUJIAN INTERAKTIF PADA WEBSITE
// =================================

const rupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(angka);
};


// 1. Form ganjil genap

document.getElementById("formGanjil")
.addEventListener("submit", function(event) {
    event.preventDefault();

    const angka = Number(document.getElementById("angka").value);
    const hasil = ganjilGenap(angka);

    document.getElementById("hasilGanjil").textContent =
        `Angka ${angka} termasuk bilangan ${hasil}.`;
});


// 2. Form Celsius

document.getElementById("formSuhu")
.addEventListener("submit", function(event) {
    event.preventDefault();

    const celsius = Number(document.getElementById("celsius").value);
    const hasil = celsiusKeFahrenheit(celsius);

    document.getElementById("hasilSuhu").textContent =
        `${celsius}°C = ${hasil}°F`;
});


// 3. Form nilai terbesar

document.getElementById("formNilai")
.addEventListener("submit", function(event) {
    event.preventDefault();

    const a = Number(document.getElementById("nilaiA").value);
    const b = Number(document.getElementById("nilaiB").value);
    const c = Number(document.getElementById("nilaiC").value);

    const hasil = nilaiTerbesar(a, b, c);

    document.getElementById("hasilNilai").textContent =
        `Angka terbesar dari ${a}, ${b}, dan ${c} adalah ${hasil}.`;
});


// 4. Form tahun kabisat

function tahunKabisat(tahun) {
    if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
        return true;
    } else {
        return false;
    }
}


// 5. Form harga diskon

document.getElementById("formDiskon")
.addEventListener("submit", function(event) {
    event.preventDefault();

    const total = Number(document.getElementById("total").value);

    if (!Number.isFinite(total) || total < 0) {
        document.getElementById("hasilDiskon").textContent =
            "Masukkan harga yang valid.";
        return;
    }

    const hasil = hargaSetelahDiskon(total);

    let keterangan = "Tidak mendapatkan diskon.";

    if (total >= 200000) {
        keterangan = "Diskon 20%";
    } else if (total >= 100000) {
        keterangan = "Diskon 10%";
    }

    document.getElementById("hasilDiskon").textContent =
        `${keterangan} Harga akhir: ${rupiah(hasil)}.`;
});

console.log("\n================================");
console.log("   SEMUA PENGUJIAN SELESAI!");
console.log("================================");