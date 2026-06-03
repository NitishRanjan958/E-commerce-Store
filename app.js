document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");

  // --- Dark Mode Logic ---
  const currentTheme = localStorage.getItem("theme");
  // Check user preference or system default
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (currentTheme === "dark" || (!currentTheme && prefersDark)) {
    document.body.classList.add("dark-mode");
    updateThemeIcon(true);
  } else {
    document.body.classList.remove("dark-mode");
    updateThemeIcon(false);
  }

  themeToggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeIcon(isDark);
  });

  function updateThemeIcon(isDark) {
    const icon = themeToggleBtn.querySelector("i");
    if (isDark) {
      icon.className = "fa-solid fa-sun";
      themeToggleBtn.style.transform = "rotate(180deg)";
    } else {
      icon.className = "fa-solid fa-moon";
      themeToggleBtn.style.transform = "rotate(0deg)";
    }
  }

  // --- Hamburger Menu Logic ---
  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const icon = hamburgerBtn.querySelector("i");
    if (navMenu.classList.contains("active")) {
      icon.className = "fa-solid fa-xmark";
    } else {
      icon.className = "fa-solid fa-bars";
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburgerBtn.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove("active");
      hamburgerBtn.querySelector("i").className = "fa-solid fa-bars";
    }
  });
});
