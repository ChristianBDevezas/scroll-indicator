// Smooth Scroll
const links = document.querySelectorAll(".navbar-list li a");

for (const link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  // const href = this.getAttribute("href");
  const href = e.target.getAttribute("href");
  document.querySelector(href).scrollIntoView({behavior: "smooth",});
}

// Sticky Header 
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  // header.classList.toggle("sticky", window.scrollY > 120);
  if(window.scrollY > 120) {
    header.classList.add("sticky");
  }
  else {
    header.classList.remove("sticky");
  }

  scrollProgress();
});

// Scroll Indicator
// window.onscroll = () => scrollProgress();
// window.addEventListener("scroll", () => scrollProgress());

function scrollProgress() {
  const currentState = document.body.scrollTop || document.documentElement.scrollTop;
  const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  console.log(currentState, pageHeight);

  const scrollPercentage = (currentState / pageHeight) * 100;

  const progressBar = document.querySelector(".progress");

  progressBar.style.visibility = "visible";
  progressBar.style.width = scrollPercentage + "%";
}