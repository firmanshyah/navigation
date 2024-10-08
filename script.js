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
  moveIndicator(e.currentTarget); // Pindahkan indikator
}

// Tambahkan event listener untuk setiap elemen pada list
list.forEach((item) => {
  item.addEventListener("click", activelink);
});

// Pastikan indikator menyesuaikan saat layar di-resize
window.addEventListener("resize", () => {
  const activeItem = document.querySelector("ul li.active");
  if (activeItem) {
    moveIndicator(activeItem);
  }
});

// Posisikan indikator pada elemen aktif saat halaman dimuat pertama kali
window.addEventListener("DOMContentLoaded", () => {
  const activeItem = document.querySelector("ul li.active");
  if (activeItem) {
    moveIndicator(activeItem);
  }
});
