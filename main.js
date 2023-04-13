gsap.from(".nav", {
  opacity: 0,
  ease: "power3.easeInOu",
  duration: 2
})

gsap.from(".title__hero span", {
  y: "100%",
  ease: "power3.easeInOut",
  duration: 1,
  stagger: 0.1
})





/*toggle btn========================*/
let tl = gsap.timeline({paused: true});
const navBtn = document.querySelector(".menu-toggle-btn");
navBtn.onclick = function (e) {
  navBtn.classList.toggle("active");
  tl.reversed(!tl.reversed());
};

tl.to(".nav__responsive", {
  y: 0,
  opacity: 1,
  duration: 0.4,
  ease: "power3.easeInOut",
  stagger: 0.03
})

tl.to(".logo a, .place span",{
  color: "#fff",
  ease: Power2.inOut,
  duration: 0.2
})

tl.from(".container__responsive ul li a", {
  y: "100%",
  ease: "Power3.easeinOut",
  stagger: 0.1,
  duration: 0.5
})

tl.from(".footer__social a", {
  opacity: 0,
  ease: "power3.easeInOut",
  duration: 0.5,
  stagger: 0.1
}).reverse();




/*============================animation text reveal===========*/


gsap.registerPlugin(ScrollTrigger);

let revealTxt = gsap.from(".txt-about p span", {
  y: "100%",
  ease: "power3.easeInOut",
  duration:1,
  stagger: 0.1,
})

let revealTxt2 = gsap.from(".txt-about2 p span", {
  y: "100%",
  ease: "power3.easeInOut",
  duration:1,
  stagger: 0.1,
})


let wrapper = gsap.to(".wrapper__img", {
  y: "-100%",
  ease: "power3.easeInOut",
  duration: 1
})

ScrollTrigger.create({
  trigger: ".txt-about",
  start: "top center",
  end: "bottom center",
  animation: revealTxt
})
ScrollTrigger.create({
  trigger: ".txt-about2",
  start: "top center",
  end: "bottom center",
  animation: revealTxt2
})

ScrollTrigger.create({
  trigger: ".box-img",
  start: "top center",
  end: "bottom center",
  animation: wrapper
})


gsap.from(".name__about span", {
  y: "100%",
  ease: "power3.easeinOut",
  duration: 1,
  stagger: 0.1
})



