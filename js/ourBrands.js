var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px"; 
    blur.style.left = dets.x - 50 +"px";
    blur.style.top = dets.y -200+ "px"; 

});





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


gsap.to("#page1",{
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



function myFunction(x) {
    x.classList.toggle("change");
  }

  




const slides = document.querySelectorAll('.slide');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentSlideIndex = 0;

// Function to show the current slide
function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => slide.classList.remove('active'));

    // Show the targeted slide
    slides[index].classList.add('active');
}

// Event listener for the next button
nextButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
});

// Event listener for the previous button
prevButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
});

// Initial slide display
showSlide(currentSlideIndex);
