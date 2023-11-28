const circle = document.querySelector('#circle');
const svgelem = document.querySelector(".svg");
const btn = document.querySelector("#jadugar");
const caseriya = document.querySelector("#case");
let tl = gsap.timeline();
window.addEventListener("mousemove", function (dets) {
  circle.style.opacity = 1
  setTimeout(function () {
    circle.style.top = `${dets.clientY}px`
    circle.style.left = `${dets.clientX}px`
  }, 100)
})
btn.addEventListener("click", function () {
  tl.reverse();
  setTimeout(() => {
    svgelem.classList.add('animate')
  }, 7000);
  setTimeout(() => {
    caseriya.classList.add('caseanim');
  }, 10000);
  gsap.to("#case p", {
    duration: 0.7,
    opacity:1
  }, "+=11.3")
  gsap.to("#case", {
    delay: 20,
    backgroundColor: "black"
  })
  gsap.to("#case p", {
    delay: 20,
    color: "white"
  })
  // tl.from("#case", {
  //   zIndex: -999999,
  //   delay: 15,
  //   duration: 8,
  //   ease: "Expo.easeInOut",
  //   top: 5000,
  //   opacity: 0
  // })
})
tl.to("#background", {
  backgroundColor: "#000000ea"
})
tl.from("#wrapper", {
  duration: 2,
  scale: 0.6,
  opacity: 0
})
tl.from("#whitestrip", {
  duration: 1.5,
  width: 0,
  ease: "Expo.easeInOut"
}, '-=1.1')
tl.from("#blackcard", {
  duration: 1.5,
  x: 900,
  opacity: 0,
  ease: "Expo.easeInOut"
})
tl.from("#linelem", {
  duration: 1.5,
  x: 50,
  opacity: 0,
  ease: "Expo.easeInOut"
}, "-=0.7")
tl.from("#linelem #line", {
  duration: 0.8,
  width: 0,
  ease: "Expo.easeInOut"
})
tl.from("#blackcard p", {
  duration: 1.3,
  opacity: 0,
  y: 30,
  ease: "Expo.easeInOut"
}, "-=0.5")
tl.from("#darkelem", {
  duration: 1,
  opacity: 0,
  x: -100,
  ease: "Expo.easeInOut"
}, "-=0.5")