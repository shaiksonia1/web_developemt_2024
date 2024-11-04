// var crsr = document.querySelector("#cursor");
// var blur = document.querySelector("#cursor-blur");
// document.addEventListener("mousemove", function(dets) {
//     crsr.style.left = dets.x + "px";
//     crsr.style.top = dets.y + "px"; 
//     blur.style.left = dets.x - 50 +"px";
//     blur.style.top = dets.y -200+ "px"; 

// });

// Ensure GSAP and ScrollTrigger are loaded
// Ensure GSAP and ScrollTrigger are loaded
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

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.getElementById("hamburger");
  
    // Toggle the visibility of the navigation links
    navLinks.classList.toggle("show");
  
    // Toggle the "open" class on the hamburger icon to animate it
    hamburger.classList.toggle("open");
  }
  