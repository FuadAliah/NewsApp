import React, { Component, Fragment } from "react";
import FacebookLogin from "react-facebook-login";
import Sidemenu from "../Sidemenu/Sidemenu";

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
      window.localStorage.setItem("USER-AUTH", this.state.isLoggedIn);
    } else {
      window.localStorage.removeItem("USER-AUTH");
    }
  };

  signOut = () => {
    this.setState({ isLoggedIn: false });
    // window.localStorage.removeItem("USER-AUTH");
  };

  render() {
    let FBContent;

    if (this.state.isLoggedIn) {
      FBContent = (
        <div className="loggedIn">
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
