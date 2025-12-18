// ANIMAÇÃO AO ROLAR (FADE + SLIDE)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

// Elementos animados
document.querySelectorAll('.card, .conteudo-content, .cta-box, .suporte')
  .forEach(el => observer.observe(el));


// EFEITO DE HEADER AO SCROLL
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'rgba(10,10,10,0.95)';
    header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.6)';
  } else {
    header.style.background = 'rgba(15,15,15,0.85)';
    header.style.boxShadow = 'none';
  }
});


// DESTAQUE DO MENU ATIVO
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});


// CTA COM PULSO (CHAMADA DE AÇÃO)
const ctaButton = document.querySelector('.btn-compra');

setInterval(() => {
  ctaButton.classList.toggle('pulse');
}, 2500);


// SCROLL SUAVE PARA ÂNCORAS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({
        behavior: 'smooth'
      });
  });
});