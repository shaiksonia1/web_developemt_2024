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
        zulfix100: {
          title: 'ZULFIX 100',
          image: '../Public/images/zulfix/zulfix100.png',
          description: 'Details about ZULFIX 100...',
        },
        zulfix200: {
          title: 'ZULFIX 200',
          image: '../Public/images/zulfix/zulfix200.png',
          description: 'Details about ZULFIX 200...',
        },
        zulfixOds: {
          title: 'ZULFIX-O DS',
          image: '../Public/images/zulfix/zulfix-o.png',
          description: 'Details about ZULFIX-O DS...',
        },
        zulfix_dt: {
          title: 'ZULFIX DT',
          image: '../Public/images/zulfix/zulfix_dt.png',
          description: 'Details about ZULFIX DT...',
        },
        zulfixo200: {
          title: 'ZULFIXO 200',
          image: '../Public/images/zulfix/zulfixo200.png',
          description: 'Details about ZULFIXO 200...',
        },
        zulpod100: {
          title: 'ZULPOD 100',
          image: '../Public/images/zulpod/zulpod100.png',
          description: 'ZULPOD 200 is a powerful antibiotic used to treat a wide range of bacterial infections. It is indicated for the treatment of conditions such as pharyngitis/tonsillitis, acute sinusitis, community-acquired pneumonia, chronic bronchitis, urinary tract infections, skin and soft tissue infections, acute otitis media, and typhoid.',
        },
        zulpodcv50: {
          title: 'ZULPOD CV 50',
          image: '../Public/images/zulpod/zulpodcv50.png',
          description: 'Driven by a relentless dissatisfaction with the status quo, our mission is to redefine treatments for immune diseases by delivering transformational',
        },
        zulpod200: {
          title: 'ZULPOD 200',
          image: '../Public/images/zulpod/zulpod200.png',
          description: 'Details about ZULPOD 200...',
        },
        zulpodcv100: {
          title: 'ZULPOD CV 100',
          image: '../Public/images/zulpod/zulpodcv100.png',
          description: 'Details about ZULPOD CV 100...',
        },
        zulpodcv200: {
          title: 'ZULPOD CV 200',
          image: '../Public/images/zulpod/zulpodcv200.png',
          description: 'Details about ZULPOD CV 200...',
        },
        mahafit_caps: {
          title: 'Mahafit Caps',
          image: '../Public/images/mahafit/mahafit-caps.png',
          description: 'Details about Mahafit Caps...',
        },
        mahafit_gold_injection: {
          title: 'Mahafit Gold Injection',
          image: '../Public/images/mahafit/mahafit-gold-injection.png',
          description: 'Details about Mahafit Gold Injection...',
        },
        mahafit_gold_softgel: {
          title: 'Mahafit Gold Softgel',
          image: '../Public/images/mahafit/mahafit-gold-softgel.png',
          description: 'Details about Mahafit Gold Softgel...',
        },
        mahafit_syrup: {
          title: 'Mahafit Syrup',
          image: '../Public/images/mahafit/mahafit-syrup.png',
          description: 'Details about Mahafit Syrup...',
        },
        mahafit_women: {
          title: 'Mahafit Women',
          image: '../Public/images/mahafit/mahafit-women.png',
          description: 'Details about Mahafit Women...',
        },
      };
      
  
    const product = products[productId];
    if (product) {
      contentArea.innerHTML = `
        <div class="product-section active">
          <img src="${product.image}" alt="${product.title}">
          <p>${product.description}</p>
        </div>
      `;
    }
  }
  
//   <h2>${product.title}</h2>
// Set the current year dynamically
document.getElementById("year").textContent = new Date().getFullYear();
