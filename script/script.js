 // Navbar scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 80);
        document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
    });
 
    // Scroll top
    document.getElementById('scrollTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
 
    // Hero slider
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    let current = 0, timer;
 
    function goTo(n) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (n + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
    }
    function autoSlide() { timer = setInterval(() => goTo(current + 1), 5000); }
 
    document.getElementById('heroNext').addEventListener('click', () => { clearInterval(timer); goTo(current + 1); autoSlide(); });
    document.getElementById('heroPrev').addEventListener('click', () => { clearInterval(timer); goTo(current - 1); autoSlide(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { clearInterval(timer); goTo(i); autoSlide(); }));
    autoSlide();
 
    const sidebar = document.getElementById('sidebar');
    document.getElementById('hamburger').addEventListener('click', () => sidebar.classList.add('open'));
    document.getElementById('sidebarClose').addEventListener('click', () => sidebar.classList.remove('open'));
    document.getElementById('sidebarOverlay').addEventListener('click', () => sidebar.classList.remove('open'));
    sidebar.querySelectorAll('a').forEach(a => a.addEventListener('click', () => sidebar.classList.remove('open')));
 
    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));