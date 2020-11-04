import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Latest from "./Views/Latest/Latest";
import Business from "./Views/Business/Business";
import Entertainment from "./Views/Entertainment/Entertainment";
import Health from "./Views/Health/Health";
import Science from "./Views/Science/Science";
import Sports from "./Views/Sports/Sports";
import Technology from "./Views/Technology/Technology";
import Bookmarks from "./Views/Bookmarks/Bookmarks";
import NotFound from "./Views/NotFound/NotFound";
import ViewItem from "./Views/ViewItem/ViewItem";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      const nav = document.getElementById("nav").parentElement;

      const header = document.getElementById("fixed-navbar");
      const navbarPosition = navbar.getBoundingClientRect();
      navbarPosition.top < 60 ? (header.innerHTML = nav.innerHTML) : (header.innerHTML = null);
    });
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Latest />
        <Navbar />
        <Switch>
          <Route exact path="/Business" component={Business} />
          <Route exact path="/Business/:id" component={ViewItem} />
          <Route exact path="/Entertainment" component={Entertainment} />
          <Route exact path="/Entertainment/:id" component={ViewItem} />
          <Route path="/Health" component={Health} />
          <Route path="/Science" component={Science} />
          <Route path="/Sports" component={Sports} />
          <Route path="/Technology" component={Technology} />
          <Route path="/Bookmarks" component={Bookmarks} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
