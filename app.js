document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".close-btn");
  const navMenu = document.querySelector(".nav-menu");

  // Toggle mobile menu open
  menuBtn.addEventListener("click", () => {
    navMenu.classList.add("open");
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
  });

  // Toggle mobile menu close
  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
  });

  // Handle dropdown toggle
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");

  dropdownButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("open");
      const dropdown = btn.nextElementSibling;
      dropdown.classList.toggle("open");
    });
  });
});
