const CARD_MENU = [`Overview`, `Details`, `Reviews`];

const MONTHS = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

const GENRES = [
  `All genres`,
  `Comedy`,
  `Crime`,
  `Documentary`,
  `Drama`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-fi`,
  `Thriller`,
];

const RATINGS = [`bad`, `normal`, `good`, `very good`, `awesome`];

const TABS = {
  OVERVIEW: 0,
  DETAILS: 1,
  REVIEWS: 2,
};

const FILMS_COUNT = 8;

const Authorization = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`,
};

const Routes = {
  LOGIN: `/login`,
  ROOT: `/`,
  FAVORITES: `/favorites`
}

export {Routes, GENRES, RATINGS, CARD_MENU, MONTHS, TABS, FILMS_COUNT, Authorization};
