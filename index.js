document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('.theme-icon');
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeIcon.textContent = 'dark_mode';
    } else {
        document.body.classList.add('dark-theme');
        themeIcon.textContent = 'light_mode';
    }

    themeToggleBtn.addEventListener('click', toggleTheme);

    function toggleTheme() {
        const isDark = document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');

        if (isDark) {
            themeIcon.textContent = 'dark_mode';
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.textContent = 'light_mode';
            localStorage.setItem('theme', 'dark');
        }
    }
});