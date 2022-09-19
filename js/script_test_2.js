"use strict";

const personalMovieDB = {
    count: 0, 
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    toggleVisibleMyDB: function() {
                            if (personalMovieDB.privat) {
                                personalMovieDB.privat = false;
                            } else {
                                personalMovieDB.privat = true;
                            }
                        },
    start: function() {
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
                while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ){
                    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
                }
            },
    rememberMyFilms: function (){
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
                        
                        },
    detectPersonalLevel: function (){
                            if (personalMovieDB.count < 10){
                                console.log('Мало фільмів');
                            } else if (personalMovieDB >= 10 && personalMovieDB < 30){
                                console.log('Ви класичний глядач');
                            } else if (personalMovieDB >= 30){
                                console.log('Ви кіноман');
                            } else {
                                console.log('Error');
                            }
                        },
    showMyDB: function (hidden){
                            if (!hidden) {
                                console.log(personalMovieDB);
                            }
                        },
    writeYourGenres: function() {
                            for ( let i = 1; i < 4; i++) {
                                    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
                                    if (genre != null && genre != ''){
                                    personalMovieDB.genres[i - 1] = genre;
                                     } else {
                                    // const genre = prompt(`Ваш любимый жанр под номером ${i}`);
                                    i--;
                                        }

                                }
                                personalMovieDB.genres.forEach((item, i) => {
                                    console.log(`Улюблений жанр ${i + 1} - ${item}`);
                                });

                            }



                        

};

// console.log(personalMovieDB.count());
// console.log(personalMovieDB.movies());
// personalMovieDB.genres();
// personalMovieDB.toggleVisibleMyDB();
// console.log(personalMovieDB);
