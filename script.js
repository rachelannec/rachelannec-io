new kursor({
    type: 1,
    removeDefaultCursor: true,
})

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function(){
        if (body.classList.contains('dark-theme')){
            body.classList.replace('dark-theme', 'light-theme');
            themeToggle.classList.replace('fa-sun', 'fa-moon');
        } else {
            body.classList.replace('light-theme', 'dark-theme');
            themeToggle.classList.replace('fa-moon', 'fa-sun');
        }
    });

    // default
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-theme');
        themeToggle.classList.add('fa-sun');
    } else {
        body.classList.add('light-theme');
        themeToggle.classList.add('fa-moon');
    }

    // copyright year
    const currentYear = new Date().getFullYear();

    document.getElementById('current-year').textContent = currentYear;
    console.log(currentYear);
});

