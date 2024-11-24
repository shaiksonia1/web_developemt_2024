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
  function showContent(productId) {
    const contentArea = document.getElementById('content-area');
    
    const products = {
        mahafitGold: {
          title: 'Mahafit Gold',
          image: 'images/mahafit-gold.jpg',
          description: 'Details about Mahafit Gold...',
        },
        zulfix100: {
          title: 'ZULFIX 100',
          image: 'images/zulfix-100.jpg',
          description: 'Details about ZULFIX 100...',
        },
        zulfix200: {
          title: 'ZULFIX 200',
          image: 'images/zulfix-200.jpg',
          description: 'Details about ZULFIX 200...',
        },
        zulfixOds: {
          title: 'ZULFIX-O DS',
          image: 'images/zulfix-ods.jpg',
          description: 'Details about ZULFIX-O DS...',
        },
        zulfix_dt: {
          title: 'ZULFIX DT',
          image: 'images/zulfix-dt.jpg',
          description: 'Details about ZULFIX DT...',
        },
        zulfixo200: {
          title: 'ZULFIXO 200',
          image: 'images/zulfixo-200.jpg',
          description: 'Details about ZULFIXO 200...',
        },
        zulpod100: {
          title: 'ZULPOD 100',
          image: 'images/zulpod-100.jpg',
          description: 'Details about ZULPOD 100...',
        },
        zulpodcv50: {
          title: 'ZULPOD CV 50',
          image: 'images/zulpod-cv50.jpg',
          description: 'Details about ZULPOD CV 50...',
        },
        zulpod200: {
          title: 'ZULPOD 200',
          image: 'images/zulpod-200.jpg',
          description: 'Details about ZULPOD 200...',
        },
        zulpodcv100: {
          title: 'ZULPOD CV 100',
          image: 'images/zulpod-cv100.jpg',
          description: 'Details about ZULPOD CV 100...',
        },
        zulpodcv200: {
          title: 'ZULPOD CV 200',
          image: 'images/zulpod-cv200.jpg',
          description: 'Details about ZULPOD CV 200...',
        },
        mahafit_caps: {
          title: 'Mahafit Caps',
          image: 'images/mahafit-caps.jpg',
          description: 'Details about Mahafit Caps...',
        },
        mahafit_gold_injection: {
          title: 'Mahafit Gold Injection',
          image: 'images/mahafit-gold-injection.jpg',
          description: 'Details about Mahafit Gold Injection...',
        },
        mahafit_gold_softgel: {
          title: 'Mahafit Gold Softgel',
          image: 'images/mahafit-gold-softgel.jpg',
          description: 'Details about Mahafit Gold Softgel...',
        },
        mahafit_syrup: {
          title: 'Mahafit Syrup',
          image: 'images/mahafit-syrup.jpg',
          description: 'Details about Mahafit Syrup...',
        },
        mahafit_women: {
          title: 'Mahafit Women',
          image: 'images/mahafit-women.jpg',
          description: 'Details about Mahafit Women...',
        },
      };
      
  
    const product = products[productId];
    if (product) {
      contentArea.innerHTML = `
        <div class="product-section active">
          <h2>${product.title}</h2>
          <img src="${product.image}" alt="${product.title}">
          <p>${product.description}</p>
        </div>
      `;
    }
  }
  