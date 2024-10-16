gsap.to("#navbar", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

  gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -75%",
      scrub: 2,
    },
  });


  gsap.from("#aboutus img,#aboutuscontent", {
    y: 90, //image initialise from y axis
    opacity: 0,  //initially opacity should be 0
    duration: 1, //stagger can be used to make the elements come one by one
    scrollTrigger: {  //creating the trigger
      trigger: "#aboutus",  //triggering about us div
      scroller: "body",
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from("#login h2,#loginbtn", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#login",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from("#newssection .wordslidernews,.newselements", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#newssection",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  var crsr = document.querySelector("#tennisball");
  var blurtennis = document.querySelector("#backblurtennis");
  document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blurtennis.style.left = dets.x - 250 + "px";
    blurtennis.style.top = dets.y - 250 + "px";
  });

  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true, // Enable infinite loop
    slidesPerView: 'auto',
    autoplay: {
        delay: 1000, // Autoplay interval
        disableOnInteraction: false, // Don't stop autoplay after interaction
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 2.5,
        slideShadows: true,
    },
    loopAdditionalSlides: 1, // Add more slides for looping without issues
    speed: 600, // Speed up slide transition for smoothness
});




  