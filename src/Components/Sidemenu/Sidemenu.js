import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

import "./Sidemenu.scss";

class Sidemenu extends Component {
  showSettings(e) {
    e.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right disableAutoFocus width={"380px"}>
        <div className="user-info">
          <div className="user-profile">
            <img src={this.props.data.picture} alt={this.props.name} />
            <div className="info">
              <span className="name">{this.props.data.name}</span>
              <span className="email">{this.props.data.email}</span>
            </div>
          </div>
          <div className="action">
            <NavLink className="logout" to="/Business" onClick={this.props.signOut}>
              Logout
            </NavLink>
          </div>
        </div>
      </Menu>
    );
  }
}

export default Sidemenu;
