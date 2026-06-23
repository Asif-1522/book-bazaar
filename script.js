 function toggleNav() {
        document.getElementById('navLinks').classList.toggle('open');
    }

    // Close nav on link click (mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('navLinks').classList.remove('open');
        });
    });

    // Smooth active state on nav
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Admin credentials (demo)
    const ADMIN_USER = 'admin';
    const ADMIN_PASS = 'admin123';

    function adminLogin() {
        const u = document.getElementById('adminUser').value.trim();
        const p = document.getElementById('adminPass').value.trim();
        const err = document.getElementById('adminError');
        if (u === ADMIN_USER && p === ADMIN_PASS) {
            err.style.display = 'none';
            // Hide public sections, show dashboard
            document.querySelector('nav.navbar').style.display = 'none';
            document.querySelector('main').style.display = 'none';
            document.getElementById('admin-login').style.display = 'none';
            document.getElementById('admin-dashboard').style.display = 'block';
            document.querySelector('footer').style.display = 'none';
            window.scrollTo(0, 0);
        } else {
            err.style.display = 'block';
        }
    }

    function adminLogout() {
        document.querySelector('nav.navbar').style.display = 'flex';
        document.querySelector('main').style.display = 'block';
        document.getElementById('admin-login').style.display = 'block';
        document.getElementById('admin-dashboard').style.display = 'none';
        document.querySelector('footer').style.display = 'flex';
        document.getElementById('adminUser').value = '';
        document.getElementById('adminPass').value = '';
        document.getElementById('adminError').style.display = 'none';
        window.location.hash = '#admin-login';
    }

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 80) current = sec.id;
        });
        navLinks.forEach(a => {
            a.style.color = '';
            if (a.getAttribute('href') === '#' + current) a.style.color = 'var(--amber)';
        });
    });