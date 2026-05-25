const themeToggle = document.getElementById('themeToggle');
let isDarkMode = false;

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
    isDarkMode = true;
}

themeToggle.addEventListener('click', () => {
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙';
        localStorage.setItem('darkMode', 'disabled');
        isDarkMode = false;
    } else {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
        localStorage.setItem('darkMode', 'enabled');
        isDarkMode = true;
    }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const ctaButton = document.getElementById('ctaBtn');

ctaButton.addEventListener('click', () => {
    showToast('🚀 Welcome Umer! Start building responsive interfaces.');
});

function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '80px';
    toast.style.right = '20px';
    toast.style.backgroundColor = 'var(--button-bg)';
    toast.style.color = 'white';
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '8px';
    toast.style.fontSize = '14px';
    toast.style.zIndex = '1000';
    toast.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    toast.style.animation = 'slideIn 0.3s ease';
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links li a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .nav-links li a.active {
        color: var(--footer-text);
        border-bottom: 2px solid var(--footer-text);
    }
`;
document.head.appendChild(activeStyle);

console.log('%c🚀Industrial Training Kit', 'color: #7c6e65; font-size: 16px; font-weight: bold;');
console.log('%c✓ Dark Mode Toggle Enabled', 'color: green;');
console.log('%c✓ Responsive Hamburger Menu', 'color: green;');
console.log('%c✓ CSS Grid Layout', 'color: green;');
console.log('%c✓ Smooth Scrolling Active', 'color: green;');