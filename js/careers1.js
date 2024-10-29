// var crsr = document.querySelector("#cursor");
// var blur = document.querySelector("#cursor-blur");
// document.addEventListener("mousemove", function(dets) {
//     crsr.style.left = dets.x + "px";
//     crsr.style.top = dets.y + "px"; 
//     blur.style.left = dets.x - 50 +"px";
//     blur.style.top = dets.y -200+ "px"; 

// });


gsap.to("#nav",{
    backgroundColor: "#191818",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main3",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start: "top -30vh",
        end:"top -80%",
        scrub:2
    }
})
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.getElementById("hamburger");
  
    // Toggle the visibility of the navigation links
    navLinks.classList.toggle("show");
  
    // Toggle the "open" class on the hamburger icon to animate it
    hamburger.classList.toggle("open");
  }
  