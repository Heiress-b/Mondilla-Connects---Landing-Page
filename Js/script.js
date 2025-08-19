const toggleBtn = document.getElementById("theme-toggle");
const themeToggleMobile = document.getElementById('theme-toggle-mobile');

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Save preference in localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Load saved theme on page load
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");
toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

function toggleTheme() {
  document.body.classList.toggle('dark');
}

document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message submitted! (Demo only)");
});

themeToggleMobile.addEventListener('click', toggleTheme);


