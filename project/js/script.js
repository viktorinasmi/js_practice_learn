'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'), // внутри такого класса, мы получаем все картинки
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'); // обращаеся к 1-му элементу

adv.forEach(item => { //так как, у нас псевдомассив, используем перебор переменных
    item.remove()
});

genre.textContent = 'Драма';

poster.style.backgroundImage = 'url("img/bg.jpg")'; // путь прописываем относительно html страницы. Кавычки прописывать разные

movieList.innerHTML = ''; // удаляем все элементы, которые были свёрстаны , при помощи html.

movieDB.movies.sort(); //сортировка по алфавиту с обращением к базе данных

movieDB.movies.forEach((film,i) => {
    movieList.innerHTML += ` <li class="promo__interactive-item"> ${i+1} ${film} // сортировка и вывод фильмов на страницу
        <div class="delete"></div>
    </li>
    `;
});