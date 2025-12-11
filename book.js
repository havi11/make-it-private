document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('bookingForm');
  const success = document.getElementById('bookingSuccess');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
      name: (form.name.value || '').trim(),
      email: (form.email.value || '').trim(),
      phone: (form.phone.value || '').trim(),
      date: form.date.value || '',
      guests: form.guests.value || '',
      type: form.type.value || '',
      notes: form.notes.value || ''
    };

    if (!data.name || !data.email) {
      alert('Please provide your name and email.');
      return;
    }

    const subject = `Booking request — ${data.name} (${data.type || 'Event'})`;
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Date: ${data.date}`,
      `Guests: ${data.guests}`,
      `Type: ${data.type}`,
      '',
      'Notes:',
      data.notes
    ].join('\n');

    const mailto = `mailto:sarfarazvickey@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

 
    window.location.href = mailto;

    if (success) {
      success.textContent = 'A draft email should open in your mail app. Press Send to complete the request.';
      success.style.display = 'block';
      success.scrollIntoView({ behavior: 'smooth' });
    }
  });
});