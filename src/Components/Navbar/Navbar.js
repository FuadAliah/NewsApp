import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
    return (
        <div id="navbar" className="navbar">
            <div className="container">
                <ul className="nav" id="nav">
                    <li><NavLink exact activeClassName="active" to="/Business">Business</NavLink></li>
                    <li><NavLink to="/Entertainment">Entertainment</NavLink></li>
                    <li><NavLink to="/Health">Health</NavLink></li>
                    <li><NavLink to="/Science">Science</NavLink></li>
                    <li><NavLink to="/Sports">Sports</NavLink></li>
                    <li><NavLink to="/Technology">Technology</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
