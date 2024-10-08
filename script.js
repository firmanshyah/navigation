let marker = document.querySelector("#marker");
let list = document.querySelectorAll("ul li");

// Fungsi untuk memindahkan indikator sesuai elemen aktif
function moveIndicator(element) {
  const offsetLeft = element.offsetLeft;
  const offsetWidth = element.offsetWidth;

  marker.style.left = offsetLeft + "px";
  marker.style.width = offsetWidth + "px";
}

// Fungsi untuk menandai elemen aktif
function activelink(e) {
  list.forEach((item) => item.classList.remove("active"));
  e.currentTarget.classList.add("active");

  // Simpan index elemen aktif ke localStorage
  const index = Array.from(list).indexOf(e.currentTarget);
  localStorage.setItem("activeItem", index);

  moveIndicator(e.currentTarget); // Pindahkan indikator
}

// Tambahkan event listener untuk setiap elemen pada list
list.forEach((item) => {
  item.addEventListener("click", activelink);
});

// Fungsi untuk mengatur elemen aktif dari localStorage
function setActiveFromLocalStorage() {
  const savedIndex = localStorage.getItem("activeItem");

  if (savedIndex !== null && list[savedIndex]) {
    list.forEach((item) => item.classList.remove("active"));
    list[savedIndex].classList.add("active");
    moveIndicator(list[savedIndex]);
  } else {
    // Jika tidak ada data di localStorage, gunakan elemen dengan ID #home sebagai default
    const homeItem = document.querySelector("ul li#home");
    if (homeItem) {
      homeItem.classList.add("active");
      moveIndicator(homeItem);
    }
  }
}

// Pastikan indikator menyesuaikan saat layar di-resize
window.addEventListener("resize", () => {
  const activeItem = document.querySelector("ul li.active");
  if (activeItem) {
    moveIndicator(activeItem);
  }
});

// Posisikan indikator pada elemen aktif saat halaman dimuat pertama kali
window.addEventListener("DOMContentLoaded", setActiveFromLocalStorage);

// let marker = document.querySelector("#marker");
// let list = document.querySelectorAll("ul li");

// // Fungsi untuk memindahkan indikator sesuai elemen aktif
// function moveIndicator(element) {
//   const offsetLeft = element.offsetLeft;
//   const offsetWidth = element.offsetWidth;

//   marker.style.left = offsetLeft + "px";
//   marker.style.width = offsetWidth + "px";
// }

// // Fungsi untuk menandai elemen aktif
// function activelink(e) {
//   list.forEach((item) => item.classList.remove("active"));
//   e.currentTarget.classList.add("active");

//   // Simpan index elemen aktif ke localStorage
//   const index = Array.from(list).indexOf(e.currentTarget);
//   localStorage.setItem("activeItem", index);

//   moveIndicator(e.currentTarget); // Pindahkan indikator
// }

// // Tambahkan event listener untuk setiap elemen pada list
// list.forEach((item) => {
//   item.addEventListener("click", activelink);
// });

// // Fungsi untuk mengatur elemen aktif dari localStorage
// function setActiveFromLocalStorage() {
//   const savedIndex = localStorage.getItem("activeItem");

//   if (savedIndex !== null && list[savedIndex]) {
//     list.forEach((item) => item.classList.remove("active"));
//     list[savedIndex].classList.add("active");
//     moveIndicator(list[savedIndex]);
//   } else {
//     // Jika tidak ada data di localStorage, gunakan elemen dengan class "active" default
//     const activeItem = document.querySelector("ul li.active");
//     if (activeItem) {
//       moveIndicator(activeItem);
//     }
//   }
// }

// // Pastikan indikator menyesuaikan saat layar di-resize
// window.addEventListener("resize", () => {
//   const activeItem = document.querySelector("ul li.active");
//   if (activeItem) {
//     moveIndicator(activeItem);
//   }
// });

// // Posisikan indikator pada elemen aktif saat halaman dimuat pertama kali
// window.addEventListener("DOMContentLoaded", setActiveFromLocalStorage);
