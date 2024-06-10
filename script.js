const hamburger = document.querySelector(".hamburger");
const dropdown = document.querySelector(".nav-menu");

hamburger.addEventListener("onclick", () => {
  hamburger.classList.toggle("active");
  dropdown.classList.toggle("active");
});
