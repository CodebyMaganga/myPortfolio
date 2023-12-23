/*
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hidden = document.getElementsByClassName("hidden");

hidden.forEach((item) => observer.observe(item))
*/
function animateText() {
  const letters = document.querySelectorAll(".hidden");
  let delay = 0;

  letters.forEach((letter) => {
    setTimeout(() => {
      letter.style.opacity = "1";
    }, delay);
    delay += 300; // Adjust this value for the desired delay between each letter
  });
}

// Call the function when the page loads or as needed
animateText();
// Select elements
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");

// Toggle mobile menu visibility
mobileMenuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("show-menu");
});
