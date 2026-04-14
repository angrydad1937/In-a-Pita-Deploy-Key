// Starter placeholder JS for In a Pita site
document.addEventListener('DOMContentLoaded', () => {
  // TODO: add interactivity (menu filtering, form handling, etc.)
  console.log('In a Pita starter script loaded');
});

// Simple form submission stub (no network calls yet)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Placeholder: you can wire this to a real endpoint later
    alert('Thanks for reaching out! This is a placeholder form.');
  });
}
