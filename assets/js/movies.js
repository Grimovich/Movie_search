import {
  addMoviesToList,
  clearMoviesMarkup,
  createMarkup,
  createStyle,
  inputSearch,
  moviesList,
  triggerMode
} from './dom.js';

let searchLast = null;

const debounceTime = (() => {
  let timer = null;

  return (cb, ms) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(cb, ms);
  };
})();

const getData = (url) => fetch(url)
  .then((res) => res.json())
  .then((data) => data.Search);


const inputSearchHandler = (e) => {
  debounceTime(() => {
    const searchString = e.target.value.trim();

    if (searchString && searchString.length > 3 && searchString !== searchLast) {

      if (!triggerMode) clearMoviesMarkup(moviesList);

      getData(`https://www.omdbapi.com/?apikey=10ae0894&s=${searchString}`)
        .then((movies) => movies.forEach((movie) => addMoviesToList(movie)))
        .catch((err) => console.log(err));
    }

    searchLast = searchString;
  }, 350);
};

export const init = () => {
  createMarkup();
  createStyle();
  inputSearch.addEventListener('input', inputSearchHandler);
};
