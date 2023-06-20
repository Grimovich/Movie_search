export let moviesList = null;

const createElement = ({type,
   attrs = {},
    container = null,
     position = 'append',
      event = null,
       handler = null}) => {
  const el = document.createElement(type);

Object.keys(attrs).forEach((key) => {
if (key === 'innerHTML') el.innerHTML = attrs[key];
else el.setAttribute(key, attrs[key]);
});

if (container && position === 'append') container.append(el);
if (container && position === 'prepend') container.prepend(el);

return el;
};

export const createStyle = () => {
  createElement({
    type: 'style',
    attrs: {
      innerHTML: `
      * {
      block-size: border-box;
    }
    
    body {
      margin: 0;
    }
    
    .container {
      width: min(100% - 40px, 1280px);
      margin-inline: auto;
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
    
    .search {
      margin-bottom: 40px;
    }
    
    .search__label-input {
      display: block;
      margin-bottom: 7px;
    }
    
    .search__input {
      display: block;
      max-width: 400px;
      width: 100%;
      padding: 10px 15px;
      border-radius: 7px;
      border: 1px solid lightgrey;
      margin-bottom: 10px;
    }
    
    .search__label-checkbox {
      font-size: 1.2rem;
    }
    
    .search__group--checkbox {
      display: flex;
      gap: 5px;
      align-items: center;
    }
    `
    },
    container: document.head
  });
};

export const createMarkup = () => {
  const container = createElement({
    type: 'div',
    attrs:{class: 'container'},
    container: document.body,
    position: 'prepend'});

createElement({
  type: 'h1',
  attrs: {innerHTML: 'Приложение для поиска фильма'},
  container
});

const searchBox = createElement({
  type: 'div',
  attrs: {class: 'search'},
  container
});

const inputBox = createElement({
  type: 'div',
  attrs: {class: 'search__group search__group--input' },
  container: searchBox
});

const checkBox = createElement({
  type: 'div',
  attrs: {class: 'search__group search__group--checkbox' },
  container: searchBox
});


createElement({
type: 'label',
attrs: {
  class: 'search__label-input',
  for: 'search',
  innerHTML: 'Текст для поиска'
},
container: inputBox
});

createElement({
type: 'input',
attrs: {
  class: 'search__input',
  id: 'search',
  type: 'search',
   placeholder: 'Введите название...'
},
container: inputBox
});


createElement({
  type: 'input',
  attrs: {
    class: 'search__checkbox',
    id: 'checkbox',
    type: 'checkbox'
  },
  container: checkBox
  });

createElement({
  type: 'label',
  attrs: {
    class: 'search__label-checkbox',
    for: 'checkbox',
    innerHTML: 'Добавлять фильмы к существующему списку'
  },
  container: searchBox
  });

createElement({
  type: 'div',
  attrs: {class: 'movies'},
  container});
 

  moviesList = document.querySelector('.movies');
}

export const addMoviesToList = (movie) => {
  const item = createElement({
    type: 'div',
    attrs: {class: 'movie'},
    position: 'prepend',
    container: moviesList
  });

  const img = document.createElement('img');
  img.setAttribute('class', 'movie__image');
  img.src = movie.Poster;
  img.alt = `${movie.Title} ${movie.Year}`
  item.append(img);
};
