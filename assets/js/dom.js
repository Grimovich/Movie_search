export let moviesList = null;

const createElement = (type,attrs, container) => {
  const el = document.createElement(type);

Object.keys(attrs).forEach (key => {
  
})
}

export const createStyle = () => {
  const headStyle = document.createElement('style');

  headStyle.innerHTML = `
  * {
  block-size: border-box;
}

body {
  margin: 0;
}

.container {
  padding: 20px;
}

.movies {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.movie {
  display: flex;
  align-content: center;
  justify-content: center;
}

.movie__image {
  width: 100%;
  object-fit: cover;
}
`

document.head.append(headStyle);
};

export const createMarkup = () => {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  // <h1>Поиск фильма</h1>

  // <div class="search">
  //   <div class="search__group--input">
  //     <label class="search__label-input" for="search">Текст для поиска</label>
  //     <input class="search__input" id="search" type="search" placeholder="Введите название...">
  //   </div>
  //   <div class="search__group--checkbox">
  //     <input class="search__checkbox" id="checkbox" type="checkbox">
  //     <label class="search__label-checkbox" for="checkbox">Добавлять фильмы к существующему списку </label>
  //   </div>
  // </div>

createElement('div', {class: movies}, container);
 
  document.body.append(container);

  moviesList = document.querySelector('.movies');
}

export const addMoviesToList = (movie) => {
  const item = document.createElement('div');
  const img = document.createElement('img');

  item.setAttribute('class', 'movie');
  img.setAttribute('class', 'movie__image');
  img.src = movie.Poster;
  img.alt = `${movie.Title} ${movie.Year}`

  item.append(img);

  moviesList.append(item);

  console.log(movie);
};
