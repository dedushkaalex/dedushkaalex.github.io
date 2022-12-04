"use strict";

const btn = document.querySelector(".dark-mode-btn");

if (localStorage.getItem("darkMode") === 'dark') {
  btn.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}
else {
   btn.classList.remove("dark-mode-btn--active");
   document.body.classList.add("light");
}


btn.addEventListener("click", () => {
  btn.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  }
  else {
    localStorage.setItem("darkMode", "light")
  }
});