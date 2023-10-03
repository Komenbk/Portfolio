
// toggle icon navbar //
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// JavaScript to toggle "Read more" functionality on mobile devices only
const isMobile = window.innerWidth <= 768; // Check if the screen width is less than or equal to 768px

if (isMobile) {
    document.querySelectorAll('.read-more').forEach(function (readMoreLink) {
        readMoreLink.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior (scrolling to the top)
            event.stopPropagation(); // Prevent the event from propagating to parent elements
            
            const moreContent = this.previousElementSibling;
            moreContent.style.display = (moreContent.style.display === 'none' || moreContent.style.display === '') ? 'inline' : 'none';
            this.innerText = (this.innerText === 'Read more') ? 'Read less' : 'Read more';
        });
    });
} else {
    readMoreLink.style.display = 'none'; // Hide "Read more" link on desktops
};


// Scroll sections active link //
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });
    // sticky navbar //
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

    // remove toggle icon and navbar when click navbar link //
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// scroll reveal //

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});

ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contacts form', {
    origin: 'bottom'
});

ScrollReveal().reveal('.home-content h1, .about-img', {
    origin: 'left'
});

ScrollReveal().reveal('.home-content p, .about-content', {
    origin: 'right'
});

// Typed JS //
const typed = new Typed('.multiple-text', {
    strings: ['Video Editor',],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});