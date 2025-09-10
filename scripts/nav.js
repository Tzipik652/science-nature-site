document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navMenu = document.querySelector(".nav-menu");

  if (burger && navMenu) {
    burger.addEventListener("click", (e) => {
      navMenu.classList.toggle("open");
      e.stopPropagation();
    });
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target)) {
        navMenu.classList.remove("open");
      }
    });
    navMenu.addEventListener("click", (e) => e.stopPropagation());
  }
});
