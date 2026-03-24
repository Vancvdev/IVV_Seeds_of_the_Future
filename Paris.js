

const mainImg = document.getElementById('main-bg-img');
const secoes = document.querySelectorAll('.monumento');

// 1. Troca o cenário ao passar o curso (scroll)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const novaSrc = entry.target.getAttribute('data-src');
            mainImg.src = novaSrc;
        }
    });
}, { threshold: 0.5 });

secoes.forEach(s => observer.observe(s));

// 2. Esconde os textos laterais e interface ao descer
window.addEventListener('scroll', () => {
    const infos = document.querySelectorAll('.side-info');
    if (window.scrollY > 80) {
        infos.forEach(el => el.classList.add('hidden-text'));
    } else {
        infos.forEach(el => el.classList.remove('hidden-text'));
    }
});


function toggleTheme() {
    document.body.classList.toggle('light-mode');
}

