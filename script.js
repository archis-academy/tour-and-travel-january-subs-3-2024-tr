// Mert Theme Switcher Start
const themeToggle = document.getElementById('theme-toggle');

function toggleDarkTheme() {
    document.body.classList.toggle('dark-theme');
}

themeToggle.addEventListener('click', toggleDarkTheme);
// Mert Theme Switcher End