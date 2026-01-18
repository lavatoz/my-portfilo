/* Cursor Effect */
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});


/* Mobile Navigation Toggle */
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('.nav-link');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('show-menu');
        const icon = navToggle.querySelector('i');
        if(navList.classList.contains('show-menu')){
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

const linkAction = () => {
    navList.classList.remove('show-menu');
    navToggle.querySelector('i').classList.remove('fa-times');
    navToggle.querySelector('i').classList.add('fa-bars');
}

navLinks.forEach(n => n.addEventListener('click', linkAction));

/* Scroll Sections Active Link */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav-list a[href*=' + sectionId + ']');

        if(sectionsClass) {
            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    })
}
window.addEventListener('scroll', scrollActive);

/* Scroll Reveal Animation (Simple replacement for ScrollReveal lib) */
const revealElements = document.querySelectorAll('.section-title, .about-data, .skills-card, .project-card, .service-card, .contact-container');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    revealElements.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");
            // Add a simple fade-in class style here via JS or assume css has it
            reveal.style.opacity = "1";
            reveal.style.transform = "translateY(0)";
        }
    });
};

/* Init styles for reveal */
revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
/* Trigger once on load */
revealOnScroll();

/* Contact Form Handling */
const contactForm = document.querySelector('#contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulate sending
        const btn = contactForm.querySelector('button');
        const originalContent = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully';
        btn.classList.add('button--primary');
        setTimeout(() => {
            btn.innerHTML = originalContent;
            contactForm.reset();
        }, 3000);
    });
}
