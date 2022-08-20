const burger = document.querySelector(".burger");
const navigation = document.querySelector("nav");
const heroBtn = document.querySelector(".hero-btn");
const logo = document.getElementById("logo");
//nav toggle for mobile
function toggle() {
  if (!burger.classList.contains("active")) {
    navigation.style.display = "block";
    burger.classList.add("active");
  } else {
    navigation.style.display = "none";
    burger.classList.remove("active");
  }
}
//gsap

function animation() {
  //making the color black to contrast background
  logo.style.color = "black";
  tl.to(".offer", { clipPath: "circle(100%)", duration: 1 });
  tl.to(".reveal-candles", {
    x: "100%",
    transformOrigin: "left",
    ease: "Stepped.easeInOut",
    duration: 2,
  });
}

//Event listeners
burger.addEventListener("click", toggle);
heroBtn.addEventListener("click", animation);
