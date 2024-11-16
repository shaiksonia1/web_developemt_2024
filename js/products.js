gsap.to("#nav", {
    backgroundColor: "#191818",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
        // markers: true 
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        start: "top -30vh",
        end: "top -80%",
        scrub: 2,
        // markers: true 
    }
});

// Refresh ScrollTrigger to ensure layout is correctly calculated
ScrollTrigger.refresh();

const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const slideWidth = track.querySelector('img').clientWidth;

nextBtn.addEventListener('click', () => {
    if (currentIndex < 5) { // Assuming n slides
        currentIndex++;
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
});

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.getElementById("hamburger");
  
    // Toggle the visibility of the navigation links
    navLinks.classList.toggle("show");
  
    // Toggle the "open" class on the hamburger icon to animate it
    hamburger.classList.toggle("open");
  }
  