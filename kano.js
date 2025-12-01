
// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// Scroll section active link
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //remove Toggle icon and  navbar when click navbar link (scroll)
  menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
// scroll reval
 ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay:200

});
ScrollReveal().reveal('.home-content, .heading ', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-content, .portfolio-box .contact form ', { origin:
     'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img ', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });

// Typed.js
const typed = new Typed('.multiple-text', {
            strings: [
                '',
                'Frontend Developer',
                'Backend Developer',
                'Programmer',
                'Very Good communication skill',
                'Problems solve skill',
                'Good relationship person',
                'Quick learner',
                'Very Punctual',
                'Ablity to work with group',
                'Honest, Responsible'
            ],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000, // Adjusted for a better experience (previously 100)
            loop: true
        });
// Form validation for contact form
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate that all fields are filled out
        if (!name || !email || !mobile || !message) {
            alert('Please fill in all fields.');
            event.preventDefault(); // Prevents form from submitting
        }
    });
// download validate
    function downloadResume() {
            // Ensure this is the correct path to your PDF resume
            window.location.href = 'resume.pdf'; 
        }