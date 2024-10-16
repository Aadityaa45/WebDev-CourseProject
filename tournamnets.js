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


  function searchTournaments() {
    const input = document.getElementById('search').value.toUpperCase();  // 
    const tournaments = document.getElementsByClassName('newselements');

    for (let i = 0; i < tournaments.length; i++) {
        const h4 = tournaments[i].getElementsByClassName('newsmainhead')[0];
        if (h4) {
            const tournamentName = h4.textContent || h4.innerText;
            if (tournamentName.toUpperCase().indexOf(input) > -1) {
                tournaments[i].style.display = '';
            } else {
                tournaments[i].style.display = 'none';
            }
        }
    }
}

window.onload = function() {
  // Get the registered teams count from localStorage
  let registeredTeamsCount = localStorage.getItem('registeredTeams') || 0;
  // Update the count in the first news element
  document.getElementById('teamCount1').textContent = registeredTeamsCount;
};


