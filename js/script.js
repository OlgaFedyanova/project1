"use strict";

// alert('Hello!');

// const result = confirm('Are you here?');
// console.log(result);

// const age = +prompt('Are you 18', '18');
// console.log(age + 5);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};
const a = prompt('один из последних просмотренных фильмов?', ''),
b = prompt('На сколько оцените его?', ''),
c = prompt('один из последних просмотренных фильмов?', ''),
d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b; //запись свойства b в объект 
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
