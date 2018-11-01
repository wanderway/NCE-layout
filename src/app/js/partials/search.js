var search = document.querySelector('.search');
var toggle = document.querySelector('.search__toggle')
var changingIcon = document.querySelector('.search__changing-icon')

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
