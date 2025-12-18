fetch('https://api.countapi.xyz/hit/culinaria-store/visitas')
  .then(response => response.json())
  .then(data => {
    document.getElementById('visitas').innerText = data.value;
  })
  .catch(err => console.error(err));

// Atualiza automaticamente o ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();


// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => obs.observe(el));


// Pequena animação quando o site carrega
window.addEventListener('load', () => {
  document.querySelectorAll('.reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 120 * i);
  });
});


// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href').slice(1);
    if (!id) return;
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  });
});

function contarVisita() {
  const hoje = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  let visitas = JSON.parse(localStorage.getItem("visitas")) || {};

  if (visitas[hoje]) {
    visitas[hoje]++;
  } else {
    visitas[hoje] = 1;
  }

  localStorage.setItem("visitas", JSON.stringify(visitas));
}

function mostrarVisitas() {
  const visitas = JSON.parse(localStorage.getItem("visitas")) || {};
  const lista = document.getElementById("lista-visitas");

  lista.innerHTML = "";

  for (let data in visitas) {
    const li = document.createElement("li");
    li.textContent = `${data}: ${visitas[data]} acessos`;
    lista.appendChild(li);
  }
}

contarVisita();
window.onload = mostrarVisitas;
