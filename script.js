// Validasi Form
document.getElementById('formContact').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      alert('Semua field harus diisi!');
      event.preventDefault(); // Mencegah pengiriman jika field kosong
    }
  });
  
  // Animasi Hover untuk Menu Navigasi
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
      this.style.color = 'yellow';
      this.style.transition = 'color 0.3s ease';
    });
    link.addEventListener('mouseout', function() {
      this.style.color = 'white';
    });
  });
  
  // Pesan Selamat Datang
  window.onload = function() {
    alert('Selamat datang di Pendaftaran Telkom University');
  };
  