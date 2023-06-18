import {
  createMarkup,
  createStyle,
  addMoviesToList,
  moviesList
 } from './dom.js';
 
 const getData = (url) => fetch(url)
 .then((res) => res.json())
 .then((data) => data.Search);
 
 const searchString = 'Superman'
 getData(`https://www.omdbapi.com/?apikey=10ae0894&s=${searchString}`)
 .then((movies) => movies.forEach((movie) => addMoviesToList(movie)))
 .catch((err) => console.log(err));
 
 export const init = () => {
   createMarkup();
   createStyle();
 }