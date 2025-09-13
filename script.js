// ----- PART 1: Event Handling ----- //

// Toggle light/dark mode
const toggleModeBtn = document.getElementById('toggleModeBtn');
toggleModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Counter button
let count = 0;
const counterBtn = document.getElementById('counterBtn');
const counterDisplay = document.getElementById('counterDisplay');

counterBtn.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = `Counter: ${count}`;
});


// ----- PART 2: Interactive Elements ----- //

// Collapsible FAQ
const faqQuestion = document.querySelector('.faq-question');
const faqAnswer = document.querySelector('.faq-answer');

faqQuestion.addEventListener('click', () => {
  faqAnswer.classList.toggle('hidden');
});


// ----- PART 3: Form Validation ----- //

const signupForm = document.getElementById('signupForm');
const formMessages = document.getElementById('formMessages');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{6,}$/; // At least 6 characters

  let errors = [];

  if (name === '') {
    errors.push('Name is required.');
  }

  if (!emailRegex.test(email)) {
    errors.push('Enter a valid email address.');
  }

  if (!passwordRegex.test(password)) {
    errors.push('Password must be at least 6 characters.');
  }

  if (errors.length > 0) {
    formMessages.style.color = 'red';
    formMessages.innerHTML = errors.join('<br>');
  } else {
    formMessages.style.color = 'green';
    formMessages.textContent = 'Form submitted successfully!';
    signupForm.reset();
  }
});
