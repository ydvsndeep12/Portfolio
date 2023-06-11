//navigation section
const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.main-menu');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  mainMenu.classList.toggle('open');
  nav.classList.toggle('open');
});


// home section
const heroProfession = ['Graphic Designer', 'UX/UI Designer', 'Full-Stack Developer', 'Web Developer'];

const heroProfessionElement = document.getElementById('heroProfession');
let index = 0;

setInterval(() => {
  heroProfessionElement.innerHTML = heroProfession[index];
  index++;
  if (index == heroProfession.length) {
    index = 0;
  }
}, 3000);
// home section

// contact section
const form = document.querySelector('contactForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const emailInput = document.getElementById('email');
  const numberInput = document.getElementById('number');
  const messageInput = document.getElementById('message');

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const number = numberInput.value.trim();
  const message = messageInput.value.trim();

  if (firstName === '' || lastName === '' || email === '' || number === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  const formData = new FormData();
  formData.append('firstName', firstName);
  formData.append('lastName', lastName);
  formData.append('email', email);
  formData.append('number', number);
  formData.append('message', message);

  fetch('/send-email', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully.');
        form.reset();
      } else {
        alert('An error occurred while sending the message.');
      }
    })
    .catch(error => {
      alert('An error occurred while sending the message.');
    });
});
// contact section

