// Grab the theme toggle button and the body element from the DOM
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check local storage to see if I previously selected a theme
const currentTheme = localStorage.getItem('theme');

// If light mode was selected in the past, apply it immediately on page load
if (currentTheme === 'light') {
    body.classList.add('light-theme');
    themeToggleBtn.textContent = 'Light';
} else {
    // Otherwise, default the button text to show Dark
    themeToggleBtn.textContent = 'Dark';
}

// Add a click listener to handle the actual theme switching
themeToggleBtn.addEventListener('click', () => {
    // Toggle the .light-theme CSS class on the body element
    body.classList.toggle('light-theme');
    
    // Update local storage and the button text so the preference is remembered
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = 'Light';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = 'Dark';
    }
});
