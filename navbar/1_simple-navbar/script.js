window.addEventListener('keyup', e => {
  if (e.key == 'a') {
    document.body.classList.toggle('debug');
  }
});

// Script

// menambahkan class active pada navbar__link ketika diklik
const navLinks = Array.from(document.querySelectorAll('.navbar .navbar__link'));

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    console.log(link);
    e.preventDefault();
    resetActiveLinkClass();
    link.parentElement.classList.add('active');
  });
});

function resetActiveLinkClass() {
  navLinks.forEach(link => {
    link.parentElement.classList.remove('active');
  });
}

// menambahkan class active pada navbar__toggle ketika diklik
const navToggle = document.querySelector('.navbar__toggle');
const navLinksWrapper = document.querySelector('.navbar__links-wrapper');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinksWrapper.classList.toggle('show');
});
