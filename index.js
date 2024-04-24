document.addEventListener('DOMContentLoaded', function () {
    const toggleThemeBtn = document.getElementById('theme');
    toggleThemeBtn.addEventListener('click', toggleTheme);

    function toggleTheme() {
        const isDarkTheme = document.body.classList.contains('light-theme');

        if (!isDarkTheme) {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    }
});

document.getElementById('theme').addEventListener('click', function() {
    var themeButton = document.getElementById('theme');
    var themeIcon = themeButton.querySelector('span.material-symbols-outlined');

    if (themeIcon.textContent === 'light_mode') {
      themeIcon.textContent = 'dark_mode';
    } else {
      themeIcon.textContent = 'light_mode';
    }
  });