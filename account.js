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



var crsr = document.querySelector("#tennisball");
var blurtennis = document.querySelector("#backblurtennis");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blurtennis.style.left = dets.x - 250 + "px";
  blurtennis.style.top = dets.y - 250 + "px";
});