import React from "react";
import PropTypes from "prop-types";
import FilmsList from "@components/films-list/films-list.jsx";
import {getFavorites} from "@reducer/data/selectors.js";
import {getUserData} from "@reducer/user/selectors.js";
import {Operation as dataOperation} from "@reducer/data/data.js";
import {Link} from "react-router-dom";
import {Routes} from "../../const.js";
import {connect} from "react-redux";

const FavoritesList = (props) => {
  if (!props.favorites) {
    props.loadFavorites();
  }
  const {
    onHeaderClickHandler,
    favorites,
    userData,
  } = props;


  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={Routes.ROOT} href="" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src={`https://4.react.pages.academy${userData.avatar}`} alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={favorites ? favorites : []} onHeaderClickHandler={onHeaderClickHandler}/>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to={Routes.ROOT} href="" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: getFavorites(state),
    userData: getUserData(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadFavorites() {
      dispatch(dataOperation.loadFavorites());
    }
  };
};

FavoritesList.propTypes = {
  favorites: PropTypes.array.isRequired,
  loadFavorites: PropTypes.func.isRequired,
  onHeaderClickHandler: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    avatar: PropTypes.string
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
