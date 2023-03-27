const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

document.addEventListener('click', function(event) {
    // If the clicked element is not the hamburger menu or any of its child elements
    if (!event.target.matches('.hamburger') && !event.target.matches('.hamburger *') && !event.target.matches('.nav-menu') && !event.target.matches('.nav-menu *')) {
      // Remove the active class from the hamburger menu
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
});