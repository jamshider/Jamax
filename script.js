const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  menuBtn.innerHTML = navLinks.classList.contains('active')
    ? "<i class='ri-close-large-line'></i>"
    : "<i class='ri-menu-line'></i>";
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuBtn.innerHTML = "<i class='ri-menu-line'></i>";
  });
});

// انیمیشن تایپینگ
const texts = [
  'توسعه‌دهنده فرانت‌اند',
  'طراح رابط کاربری',
  'متخصص React.js',
  'فریلنسر خلاق',
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing-effect').textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }

  setTimeout(type, 150);
}

type();