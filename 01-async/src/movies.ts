// const movies = service.get()
//     .then(movies => movies.forEach(movie => showMovie(movie)));

// // sekvencijalni pozivi
// getRandomNumber()
//     .then(number => service.getByIndex(number))
//     .then(movie => showMovie(movie));

// Promise.all([
//     getRandomNumber(),
//     service.get()
// ]).then(([number, movies]) => {
//     document.write("<p>Promise all</p>");
//     showMovie(movies[number % movies.length]);
// });

// function showMovie(movie) {
//     const {title, year, score} = movie;
//     document.write(`${title}, ${year}, ${score}`);
// }