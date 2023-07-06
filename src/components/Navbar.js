import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../components/images/logo.svg";
import { FaAlignRight } from "react-icons/fa";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Hayani Hotel" />
            </Link>

            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>

          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <button className="register-button">
                <Link to="/signup">Signup</Link>
              </button>
            </li>
            <li>
              <button className="login-button">
                <Link to="/Login">Login</Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
