// Simple client-side behavior for the Bob's Home Services demo app

// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('quoteForm');
  const status = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.textContent = 'Sending...';

      const data = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        service: form.service.value,
        message: form.message.value.trim(),
        submittedAt: new Date().toISOString()
      };

      // Basic client-side validation
      if (!data.name || !data.email) {
        status.textContent = 'Please provide your name and email.';
        return;
      }

      // For this demo we simply log the submission and show a success message.
      // Replace this block with a fetch() call to your backend API (example commented below).
      console.log('Quote request:', data);

      // Simulate an async request
      await new Promise(res => setTimeout(res, 700));

      status.textContent = 'Thanks! Your request has been received. Bob will get back to you shortly.';
      form.reset();

    });
  }
});
