const search = document.querySelector('.search');
const toggle = document.querySelector('.search__toggle');
const changingIcon = document.querySelector('.search__changing-icon');

toggle.addEventListener('click', function () {
    if (search.classList.contains('search--closed')) {
        search.classList.remove('search--closed');
        search.classList.add('search--opened');
        changingIcon.setAttribute("href", "#changing-icon")
    } else {
        search.classList.add('search--closed');
        search.classList.remove('search--opened');
        changingIcon.setAttribute("href", "#search-icon")

    }
});
