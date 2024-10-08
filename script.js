document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-menu li a");
  const marker = document.querySelector("#marker");

  // Fungsi untuk menggerakkan marker mengikuti elemen yang aktif
  function moveMarker(targetElement) {
    marker.style.left = targetElement.offsetLeft + "px";
    marker.style.width = targetElement.offsetWidth + "px";
  }

  // Fungsi untuk mengatur kelas active dan sinkronisasi antara navbar dan mobile-menu
  function setActive(link, fromNavbar = true) {
    // Hapus kelas active dari semua elemen
    navbarLinks.forEach((item) => item.classList.remove("active"));
    mobileLinks.forEach((item) =>
      item.parentElement.classList.remove("active")
    );

    if (fromNavbar) {
      // Tambah kelas active pada elemen navbar yang dipilih
      link.classList.add("active");

      // Sinkronisasi dengan mobile-menu
      const targetId = link.getAttribute("href");
      const mobileLink = [...mobileLinks].find(
        (mobile) => mobile.getAttribute("href") === targetId
      );

      if (mobileLink) {
        mobileLink.parentElement.classList.add("active"); // Set li pada mobile-menu aktif
        moveMarker(mobileLink.parentElement); // Pindahkan marker ke li yang aktif
      }
    } else {
      // Tambah kelas active pada elemen mobile yang dipilih
      link.parentElement.classList.add("active");

      // Sinkronisasi dengan navbar
      const targetId = link.getAttribute("href");
      const navbarLink = [...navbarLinks].find(
        (navbar) => navbar.getAttribute("href") === targetId
      );

      if (navbarLink) {
        navbarLink.classList.add("active"); // Set nav-link pada navbar aktif
      }

      moveMarker(link.parentElement); // Pindahkan marker ke li yang aktif
    }
  }

  // Event listener untuk klik pada navbar links
  navbarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      setActive(this, true); // Sinkronisasi dari navbar ke mobile-menu
    });
  });

  // Event listener untuk klik pada mobile links
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      setActive(this, false); // Sinkronisasi dari mobile-menu ke navbar
    });
  });

  // Set marker untuk elemen yang aktif pertama kali saat halaman dimuat
  const activeLink = document.querySelector(".mobile-menu li.active a");
  if (activeLink) {
    moveMarker(activeLink.parentElement);
  }

  // Update posisi marker ketika window di-resize agar tetap sinkron
  window.addEventListener("resize", function () {
    const activeElement = document.querySelector(".mobile-menu li.active a");
    if (activeElement) {
      moveMarker(activeElement.parentElement); // Pindahkan marker ke elemen aktif saat resize
    }
  });
});
