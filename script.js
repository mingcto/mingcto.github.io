window.onload = () => {
    // 启动图显示5秒后移除
    setTimeout(() => {
        document.getElementById('startup-screen').style.display = 'none';
        document.querySelectorAll('.hidden').forEach(element => {
            element.classList.remove('hidden');
        });
    }, 2000);

    // 粒子特效初始化
    createParticles();
};

// 火焰粒子特效
function createParticles() {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function createParticle() {
        const x = Math.random() * canvas.width;
        const y = canvas.height + Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const speed = Math.random() * 1.5 + 0.5;
        const opacity = Math.random() * 0.5 + 0.5;
        return { x, y, size, speed, opacity };
    }

    function updateParticles() {
        particles.forEach(p => {
            p.y -= p.speed;
            p.opacity -= 0.005;
            if (p.y < -10 || p.opacity <= 0) {
                Object.assign(p, createParticle());
            }
        });
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(255, 69, 0, 0.8)';
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 69, 0, ${p.opacity})`;
            ctx.fill();
        });
    }

    function animate() {
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }

    // 初始化粒子
    for (let i = 0; i < 100; i++) {
        particles.push(createParticle());
    }

    animate();
}

