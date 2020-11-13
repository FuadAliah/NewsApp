import React, { Component, Fragment } from "react";
import FacebookLogin from "react-facebook-login";
import { NavLink } from "react-router-dom";

import Sidemenu from "../Sidemenu/Sidemenu";
import { FiBookmark } from "react-icons/fi";

import "./Login.scss";

export class Login extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };

  responseFacebook = (response) => {
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });

    if (this.state.isLoggedIn) {
    }
  };

  signOut = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let FBContent;
    if (this.state.isLoggedIn) {
      FBContent = (
        <div className="loggedIn">
          <NavLink exact to="/Bookmarks" className="bookmarks-icon">
            <FiBookmark className="icon" />
          </NavLink>
          <img src={this.state.picture} alt={this.state.name} />
          <Sidemenu data={this.state} signOut={this.signOut} />
        </div>
      );
    } else {
      FBContent = <FacebookLogin appId="2426705100972485" autoLoad={false} fields="name,email,picture" callback={this.responseFacebook} />;
    }

    return <Fragment>{FBContent}</Fragment>;
  }
}

export default Login;
