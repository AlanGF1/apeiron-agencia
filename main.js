/* Stars */
    const starsEl = document.getElementById('stars');
    for (let i = 0; i < 120; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      s.style.cssText = `
        left:${Math.random()*100}%;
        top:${Math.random()*100}%;
        --d:${2+Math.random()*4}s;
        --delay:${-Math.random()*5}s;
        --op:${0.1+Math.random()*0.5};
        width:${Math.random()>0.8?3:2}px;
        height:${Math.random()>0.8?3:2}px;
      `;
      starsEl.appendChild(s);
    }

    /* Scroll reveal */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    /* Navbar scroll */
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav');
      nav.style.background = window.scrollY > 50
        ? 'rgba(6,4,15,0.92)'
        : 'rgba(6,4,15,0.7)';
    });

    /* FAQ Accordion */
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        document.querySelectorAll('.faq-question').forEach(b => b.setAttribute('aria-expanded', 'false'));
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });