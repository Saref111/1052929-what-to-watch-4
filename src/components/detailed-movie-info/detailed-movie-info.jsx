import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";
import TabsNav from "../tabs-nav/tabs-nav.jsx";
import {GENRES} from "../../const.js";
import {uppercaseFirstLetter} from "../../helpers/helpers.js";


class DetailedMovieInfo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState(() => {
      return {page: id};
    });
  }

  render() {
    const {movie} = this.props;
    const {title, details} = movie;
    const {bgPoster, cover, genre, year} = details;
    const {page} = this.state;

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={`${bgPoster}${title}`} alt={`${title}`} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </div>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{`${title}`}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{`${uppercaseFirstLetter(genre)}`}</span>
                  <span className="movie-card__year">{`${year}`}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  <a href="add-review.html" className="btn movie-card__button">Add review</a>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={`${cover}${title}`} alt={`${title}`} width="218" height="327" />
              </div>
              <div className="movie-card__desc">
                <TabsNav
                  page={page}
                  handleClick={this.handleClick}
                />
                <Tabs
                  page={page}
                  info={details}
                />
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          {this.props.children}
          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

DetailedMovieInfo.propTypes = {
  children: PropTypes.node.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    details: PropTypes.shape({
      bgPoster: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      genre: PropTypes.oneOf(GENRES).isRequired,
      year: PropTypes.number.isRequired,
      rate: PropTypes.number.isRequired,
      votes: PropTypes.number.isRequired,
      actors: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.shape({
        prescription: PropTypes.string.isRequired,
        postscription: PropTypes.string.isRequired,
      }).isRequired,
      reviews: PropTypes.array.isRequired,
    }),
  }),
};

export default DetailedMovieInfo;
