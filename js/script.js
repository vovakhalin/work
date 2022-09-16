"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const   a = prompt('Один из последних просмотренных фильмов', ''),
//         b = prompt('На сколько оцените его?', ''),
//         c = prompt('Один из последних просмотренных фильмов', ''),
//         d = prompt('На сколько оцените его?', '');


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;



function rememberMyFilms (){
    for ( let i = 0; i < 2; i++) {
        const   a = prompt('Один из последних просмотренных фильмов', ''),
                b = prompt('На сколько оцените его?', '');
           
                if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('Done');
                } else {
                    console.log('Error');
                    i--;
                }
    }

}

// rememberMyFilms();



function detectPersonalLevel (){
    if (personalMovieDB.count < 10){
        console.log('Мало фільмів');
    } else if (personalMovieDB >= 10 && personalMovieDB < 30){
        console.log('Ви класичний глядач');
    } else if (personalMovieDB >= 30){
        console.log('Ви кіноман');
    } else {
        console.log('Error');
    }
}

// detectPersonalLevel();

// function showMyDB (){
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }

function showMyDB (hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    const genres = [];
    for ( let i = 1; i < 4; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();
