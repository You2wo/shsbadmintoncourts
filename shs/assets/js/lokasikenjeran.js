document.getElementById('fab').addEventListener('click', function() {
  window.location.href = 'https://lapanganonline.com/booking/badminton_sewa/41';
});

document.addEventListener('DOMContentLoaded', function() {
  var map = L.map('map').setView([-7.245936349430141, 112.77209904741511], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([-7.245936349430141, 112.77209904741511]).addTo(map)
      .bindPopup('SHS Badminton Court Kenjeran')
      .openPopup();
});