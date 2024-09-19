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





gsap.to("#main2",{
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

let lastScroll = 0;

gsap.to("#page4", {
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top center",  // The action starts when #page4 reaches the center
        end: "bottom center",  // Ends when #page4's bottom leaves the center
        scrub: 2,
        onUpdate: (self) => {
            let currentScroll = self.scroll();
            if (currentScroll > lastScroll) {
                // Scrolling down - change #page4 to black
                gsap.to("body", { backgroundColor: "#000", duration: 1 });
            } else {
                // Scrolling up - change #page4 to green
                gsap.to("#page4", { backgroundColor: "#95c11e", duration: 1 });
            }
            lastScroll = currentScroll;
        }
    }
});