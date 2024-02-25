// Mert Theme Switcher Start
const themeToggle = document.getElementById('theme-toggle');
const moonIcon = document.querySelector('.fa-moon');
const sunIcon = document.querySelector('.fa-sun');

function toggleDarkTheme() {
    document.body.classList.toggle('dark-theme');
    const isDarkTheme = document.body.classList.contains('dark-theme');
    if (isDarkTheme) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
        document.cookie = "theme=dark; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
        document.cookie = "theme=light; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    }
}

themeToggle.addEventListener('click', toggleDarkTheme);

window.addEventListener('DOMContentLoaded', () => {
    const themeCookie = document.cookie.split(';').find(cookie => cookie.includes('theme'));
    if (themeCookie) {
        const themeValue = themeCookie.split('=')[1].trim();
        if (themeValue === 'dark') {
            document.body.classList.add('dark-theme');
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        } else {
            document.body.classList.remove('dark-theme');
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
    } else {
        document.body.classList.remove('dark-theme');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
});
// Mert Theme Switcher End