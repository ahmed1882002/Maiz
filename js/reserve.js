/**
 * MAÏZ - Interactive Reservation Booking Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initBookingEngine();
});

function initBookingEngine() {
  const form = document.getElementById('reservationForm');
  if (!form) return;

  // Guest Selector
  const guestButtons = document.querySelectorAll('.guest-btn');
  let selectedGuests = 2;
  guestButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      guestButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedGuests = parseInt(btn.dataset.guests, 10);
    });
  });

  // Time Slot Selector
  const timeButtons = document.querySelectorAll('.time-slot-btn');
  let selectedTime = '19:00';
  timeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      timeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedTime = btn.dataset.time;
    });
  });

  // Seating Option Selector
  const seatingOptions = document.querySelectorAll('.seating-card-option');
  let selectedSeating = 'hearth';
  seatingOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      seatingOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      selectedSeating = opt.dataset.seating;
    });
  });

  // Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('bookName');
    const phoneInput = document.getElementById('bookPhone');
    const dateInput = document.getElementById('bookDate');
    const locationSelect = document.getElementById('bookLocation');
    const notesInput = document.getElementById('bookNotes');

    const bookingRef = 'MZ-' + Math.floor(100000 + Math.random() * 900000);
    const guestName = nameInput ? nameInput.value : 'Valued Guest';
    const dateVal = dateInput ? dateInput.value : 'Selected Date';
    const locName = locationSelect ? locationSelect.options[locationSelect.selectedIndex].text : 'Downtown Atelier';

    // Show Confirmation Modal / Card
    const confirmationModal = document.getElementById('bookingConfirmationModal');
    if (confirmationModal) {
      document.getElementById('confRefCode').textContent = bookingRef;
      document.getElementById('confName').textContent = guestName;
      document.getElementById('confDetails').textContent = `${selectedGuests} Guests • ${dateVal} at ${selectedTime} (${selectedSeating.toUpperCase()} SEATING)`;
      document.getElementById('confLocation').textContent = locName;

      confirmationModal.classList.add('active');
      document.querySelector('.drawer-backdrop').classList.add('active');
    } else {
      showToast(`Reservation confirmed for ${guestName} (${bookingRef})!`);
    }

    form.reset();
  });

  // Close Confirmation Modal
  const closeConfBtn = document.getElementById('closeConfModal');
  if (closeConfBtn) {
    closeConfBtn.addEventListener('click', () => {
      document.getElementById('bookingConfirmationModal').classList.remove('active');
      document.querySelector('.drawer-backdrop').classList.remove('active');
    });
  }
}
