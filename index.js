document.addEventListener('DOMContentLoaded', function () {
    const toggleThemeBtn = document.getElementById('theme');
    toggleThemeBtn.addEventListener('click', toggleTheme);

    function toggleTheme() {
        const isDarkTheme = document.body.classList.contains('dark-theme');

        if (!isDarkTheme) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }
});