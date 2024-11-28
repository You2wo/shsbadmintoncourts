document.getElementById('fab').addEventListener('click', function() {
  window.location.href = 'https://lapanganonline.com/booking/badminton_sewa/12';
});

document.addEventListener('DOMContentLoaded', function() {
  var map = L.map('map').setView([-7.302289646528863, 112.76233588392917], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([-7.302289646528863, 112.76233588392917]).addTo(map)
      .bindPopup('SHS Badminton Court Nginden')
      .openPopup();
});