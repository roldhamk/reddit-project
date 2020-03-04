import "./Navbar.css";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "./images/redditlogo.png";
import text from "./images/reddittext.png";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav className="desktopnav">
          <div className="images">
            <img src={logo} alt="" width="32px" />
            <img className="reddittext" src={text} alt="" width="57px" />
          </div>

          <div className="searchbar">
            <FaSearch />
            <input type="text" placeholder="Search" />
          </div>
          <div className="buttons">
            <button className="login">Log In</button>
            <button className="signup">Sign Up</button>
            <button className="dropdown">
              <MdPerson class="md" />
              <MdKeyboardArrowDown class="md" />
            </button>
          </div>
        </nav>

        <nav className="mobilenav">
          <div className="images">
            <img src={logo} alt="" width="32px" />
            <img className="reddittext" src={text} alt="" width="57px" />
            <button className="marrow">v</button>
          </div>
          <div className="mobileBtn">
            <button className="useapp">Use App</button>
            <button className="chat">Icon</button>
            <button className="search">
              <FaSearch />
            </button>
            <button className="mdropdown">Dicon</button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
