document.addEventListener('DOMContentLoaded', () => {
  // Pilih elemen tombol hamburger dan menu navigasi
  const hamburger = document.querySelector('.hamburger-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // Pastikan kedua elemen ada sebelum menambahkan event listener
  if (hamburger && navMenu) {
    // Tambahkan event listener untuk 'click' pada tombol hamburger
    hamburger.addEventListener('click', () => {
      // Toggle class 'active' pada navMenu untuk menampilkan/menyembunyikan
      navMenu.classList.toggle('active');
    });

    // (Opsional) Tutup menu saat salah satu link di dalam menu di-klik
    // Ini berguna untuk navigasi satu halaman (Single Page Application)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      });
    });
  }
});