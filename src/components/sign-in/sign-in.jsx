import React from "react";
import PropTypes from "prop-types";
import {getValidityStatus, getIsWrongStatus, getUserData} from "reducer/user/selectors";
import {actionCreator, Operation} from "reducer/user/user.js";
import { connect } from "react-redux";

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  _validateFormData(login) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(login).toLowerCase());
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const {setValidity, submitAuthFormHandler} = this.props;
    const login = this.loginRef.current.value;
    const password = this.passwordRef.current.value;

    if (this._validateFormData(login)) {
      setValidity(true);
      submitAuthFormHandler({email: login, password});
    } else {
      setValidity(false);
    }
  }

  render() {
    const {cancelAuthorizationHandler, isValid, isWrong} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="#" onClick={cancelAuthorizationHandler} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" onSubmit={this.handleSubmit} className="sign-in__form">
            {isWrong ?
              <div className="sign-in__message">
                <p>We can’t recognize this email <br/> and password combination. Please try again.</p>
              </div> : ``}
            <div className="sign-in__fields">
              <div className={`sign-in__field ${isValid ? `` : `sign-in__field--error`}`}>
                <input ref={this.loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input ref={this.passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


SignIn.propTypes = {
  submitAuthFormHandler: PropTypes.func.isRequired,
  cancelAuthorizationHandler: PropTypes.func.isRequired,
  setValidity: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  isWrong: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isValid: getValidityStatus(state),
  isWrong: getIsWrongStatus(state),
  userData: getUserData(state),
});

const mapDispatchToProps = (dispatch) => ({
  cancelAuthorizationHandler() {
    dispatch(actionCreator.setSigningInStatus(false));
  },
  setValidity(status) {
    dispatch(actionCreator.setValidityStatus(status));
  },
  submitAuthFormHandler(data) {
    dispatch(Operation.login(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
