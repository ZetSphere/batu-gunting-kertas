let playerScore = 0; // Skor untuk Player
let computerScore = 0; // Skor untuk Computer

// Fungsi untuk memulai permainan ulang
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
  const info = document.querySelector(".info");
  info.innerHTML = "Permainan Dimulai Ulang!";
}

// Fungsi untuk menampilkan siapa pemenang ketika ada yang mencapai skor 10
function checkWinner() {
  if (playerScore === 10) {
    const info = document.querySelector(".info");
    // info.innerHTML = "Selamat! Kamu Menang!";
    alert("KAMU MENANGGG!!");
    setTimeout(resetGame, 2000); // Reset game setelah 2 detik
  } else if (computerScore === 10) {
    const info = document.querySelector(".info");
    // info.innerHTML = "Komputer Menang! Kamu Kalah!";
    alert("KAMU KALAH!!");
    setTimeout(resetGame, 2000); // Reset game setelah 2 detik
  }
}

function getpilihanComp() {
  const comp = Math.random();
  if (comp < 0.34) return "batu";
  if (comp >= 0.34 && comp < 0.67) return "gunting";
  return "kertas";
}

function getHasil(comp, player) {
  let result = "";

  if (player == comp) {
    result = "SERI!";
  } else if (player == "batu") {
    result = comp == "gunting" ? "KAMU MENANG!" : "KAMU KALAH!";
  } else if (player == "gunting") {
    result = comp == "batu" ? "KAMU KALAH!" : "KAMU MENANG!";
  } else if (player == "kertas") {
    result = comp == "gunting" ? "KAMU KALAH!" : "KAMU MENANG!";
  }

  // Update skor berdasarkan hasil
  if (result === "KAMU MENANG!") {
    playerScore++;
  } else if (result === "KAMU KALAH!") {
    computerScore++;
  }

  // Perbarui tampilan skor di halaman
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;

  checkWinner(); // Cek apakah ada pemenang setelah setiap ronde

  return result;
}

function rotate() {
  const imgComp = document.querySelector(".img-computer");
  const img = ["batu", "gunting", "kertas"];
  let i = 0;
  const start = new Date().getTime();
  const duration = 1500; // Durasi rotasi (1.5 detik)

  // Mengatur interval untuk memutar gambar
  const interval = setInterval(function () {
    if (new Date().getTime() - start > duration) {
      clearInterval(interval); // Hentikan interval setelah durasi selesai
      return;
    }
    imgComp.setAttribute("src", "image/" + img[i++] + ".jpg");
    if (i === img.length) i = 0;
  }, 100); // Putar setiap 100ms
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanPlayer = pil.className; // Pilihan player
    const pilihanComputer = getpilihanComp(); // Pilihan komputer

    rotate(); // Putar gambar komputer terlebih dahulu

    // Tunda tampilkan hasil dan skor setelah rotasi selesai
    setTimeout(function () {
      const imgComp = document.querySelector(".img-computer");
      imgComp.setAttribute("src", "image/" + pilihanComputer + ".jpg"); // Menampilkan pilihan komputer yang sebenarnya

      const hasil = getHasil(pilihanComputer, pilihanPlayer); // Dapatkan hasil permainan

      const info = document.querySelector(".info");
      info.innerHTML = hasil; // Tampilkan hasil (Menang/Kalah/Seri)
    }, 1500); // Durasi rotasi, sesuaikan dengan waktu rotasi (1500ms)
  });
});

// const pBatu = document.querySelector(".batu");
// const pGunting = document.querySelector(".gunting");
// const pKertas = document.querySelector(".kertas");

// pBatu.addEventListener("click", function () {
//   const pilihanComputer = getpilihanComp();
//   const pilihanPlayer = pBatu.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   const imgComp = document.querySelector(".img-computer");
//   const info = document.querySelector(".info");

//   imgComp.setAttribute("src", "image/" + pilihanComputer + ".jpg");
//   info.innerHTML = hasil;
// });

// pGunting.addEventListener("click", function () {
//   const pilihanComputer = getpilihanComp();
//   const pilihanPlayer = pGunting.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   const imgComp = document.querySelector(".img-computer");
//   const info = document.querySelector(".info");

//   imgComp.setAttribute("src", "image/" + pilihanComputer + ".jpg");
//   info.innerHTML = hasil;
// });

// pKertas.addEventListener("click", function () {
//   const pilihanComputer = getpilihanComp();
//   const pilihanPlayer = pKertas.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   const imgComp = document.querySelector(".img-computer");
//   const info = document.querySelector(".info");

//   imgComp.setAttribute("src", "image/" + pilihanComputer + ".jpg");
//   info.innerHTML = hasil;
// });
