import {reducer, Actions} from "./reducer.js";

const HREF = `http://dummyimage.com/280x175/D76E00&text=`;
const BG_HREF = `http://dummyimage.com/1300/D76E00&text=`;
const POSTER_HREF = `http://dummyimage.com/218x327&text=`;
const prescription = `Lorem ipsum dolor sit amet. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.`;
const postscription = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?`;
const description = {
  prescription,
  postscription,
};
const actors = [`Ivan Ivanov`, `Piotr Petrov`, `Alexandr Alexandrov`];
const reviews = [
  {
    name: `Ivan Ivanov`,
    rate: 8.9,
    date: new Date(),
    text: `Lorem ipsum dolor sit amet. Eligendi non quis exercitationem culpa`,
  },
  {
    name: `Ivan Ivanov`,
    rate: 8.9,
    date: new Date(),
    text: `Lorem ipsum dolor sit amet. Eligendi non quis exercitationem culpa`,
  },
  {
    name: `Ivan Ivanov`,
    rate: 8.9,
    date: new Date(),
    text: `Lorem ipsum dolor sit amet. Eligendi non quis exercitationem culpa`,
  },
];

const FILMS = [
  {
    id: 0,
    title: `Джей и молчаливый Боб`,
    src: HREF,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    details: {
      bgPoster: BG_HREF,
      cover: POSTER_HREF,
      genre: `comedy`,
      year: 2001,
      rate: 8.8,
      votes: 666,
      time: `1h 55m`,
      director: `Kevin Smith`,
      actors,
      description,
      reviews,
    },
  },
  {
    id: 1,
    title: `Карты, деньги, два ствола`,
    src: HREF,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    details: {
      bgPoster: BG_HREF,
      cover: POSTER_HREF,
      genre: `comedy`,
      year: 2001,
      rate: 8.8,
      votes: 666,
      time: `1h 55m`,
      director: `Kevin Smith`,
      actors,
      description,
      reviews,
    },
  },
  {
    id: 2,
    title: `Зеленый слоник`,
    src: HREF,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    details: {
      bgPoster: BG_HREF,
      cover: POSTER_HREF,
      genre: `drama`,
      year: 2001,
      rate: 8.8,
      votes: 666,
      time: `1h 55m`,
      director: `Kevin Smith`,
      actors,
      description,
      reviews,
    },
  },
  {
    id: 3,
    title: `Матрица`,
    src: HREF,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    details: {
      bgPoster: BG_HREF,
      cover: POSTER_HREF,
      genre: `comedy`,
      year: 2001,
      rate: 8.8,
      votes: 666,
      time: `1h 55m`,
      director: `Kevin Smith`,
      actors,
      description,
      reviews,
    },
  },
  {
    id: 4,
    title: `Законопослушный гражданин`,
    src: HREF,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    details: {
      bgPoster: BG_HREF,
      cover: POSTER_HREF,
      genre: `comedy`,
      year: 2001,
      rate: 8.8,
      votes: 666,
      time: `1h 55m`,
      director: `Kevin Smith`,
      actors,
      description,
      reviews,
    },
  },
  {
    id: 5,
    title: `Человек с Земли`,
    src: HREF,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    details: {
      bgPoster: BG_HREF,
      cover: POSTER_HREF,
      genre: `comedy`,
      year: 2001,
      rate: 8.8,
      votes: 666,
      time: `1h 55m`,
      director: `Kevin Smith`,
      actors,
      description,
      reviews,
    },
  },
  {
    id: 6,
    title: `Автострада 60: дорожные истории`,
    src: HREF,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    details: {
      bgPoster: BG_HREF,
      cover: POSTER_HREF,
      genre: `comedy`,
      year: 2001,
      rate: 8.8,
      votes: 666,
      time: `1h 55m`,
      director: `Kevin Smith`,
      actors,
      description,
      reviews,
    },
  },
  {
    id: 7,
    title: `Appleman`,
    src: HREF,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    details: {
      bgPoster: BG_HREF,
      cover: POSTER_HREF,
      genre: `comedy`,
      year: 2001,
      rate: 8.8,
      votes: 666,
      time: `1h 55m`,
      director: `Kevin Smith`,
      actors,
      description,
      reviews,
    },
  },
];

test(`Expect initialState`, () => {
  expect(reducer(undefined, {})).toEqual({
    filterGenre: `all genres`,
    films: FILMS,
    movieID: -1,
  });
});

test(`Expect new filter`, () => {
  expect(reducer({
    filterGenre: `1`,
    films: FILMS,
    movieID: -1,
  }, {
    type: Actions.CHANGE_FILTER,
    payload: `all genres`,
  })).toEqual({
    filterGenre: `all genres`,
    films: FILMS,
    movieID: -1,
  });
});

test(`Expect new films`, () => {
  const halvedFilms = FILMS.filter((it, i) => i % 2 === 0);

  expect(reducer({
    filterGenre: `1`,
    films: FILMS,
    movieID: -1,
  }, {
    type: Actions.GET_FILMS_BY_GENRE,
    payload: halvedFilms,
  })).toEqual({
    filterGenre: `1`,
    films: halvedFilms,
    movieID: -1,
  });
});

test(`Expect new movieID`, () => {
  expect(reducer({
    filterGenre: `1`,
    films: FILMS,
    movieID: -1,
  }, {
    type: Actions.SET_MOVIE_ID,
    payload: 1,
  })).toEqual({
    filterGenre: `1`,
    films: FILMS,
    movieID: 1,
  });
});
