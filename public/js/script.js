const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// hamburger button
hamburger.addEventListener("click", (e) => {
  // toggle active class
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

//Close navmenu when navlink is click
navLinks.forEach((link) => {
  // attach event listener
  link.addEventListener("click", () => {
    // remove active class
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
