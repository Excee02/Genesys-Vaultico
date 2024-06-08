const hamburger = document.querySelector(".hamburger");
const dropdown = document.querySelector(".nav-menu");

hamburger.addEventListener("oclick", () => {
  hamburger.classList.toggle("active");
  dropdown.classList.toggle("active");
});
