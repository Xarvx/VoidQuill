

const particlesContainer = document.getElementById('particles');

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 5 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    
    particlesContainer.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 10000);
}

for (let i = 0; i < 20; i++) {
    setTimeout(createParticle, i * 500);
}

setInterval(createParticle, 2000);

document.querySelectorAll('.link-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.setProperty('--glow-color', 'rgba(168, 85, 247, 0.6)');
    });
});