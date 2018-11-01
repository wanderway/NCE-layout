var navMain = document.querySelector('.navigation-block__languages');

navMain.addEventListener('click', function () {
    if (navMain.classList.contains('navigation-block__languages--closed')) {
        navMain.classList.remove('navigation-block__languages--closed');
        navMain.classList.add('navigation-block__languages--opened');
    } else {
        navMain.classList.add('navigation-block__languages--closed');
        navMain.classList.remove('navigation-block__languages--opened');
    }
});
