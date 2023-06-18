document.querySelector('.scroll-link').addEventListener('click', function (event) {
    event.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });