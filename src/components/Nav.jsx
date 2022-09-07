import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav">
        <div className="first-nav flex-row prime-color-text">
          <i className="fas fa-house-user h3-text"></i>
          <h3 className="h3-text">AirBnb</h3>
        </div>
        <div className="mid-nav flex-row">
          <ul className="nav-links">
            <Link className="li-link-a" to="/">
              <li className="li-link">Anywhere </li>
            </Link>
            <Link className="li-link-a" to="/">
              <li className="li-link">AnyWeek </li>
            </Link>
            <Link className="li-link-a" to="/">
              <li className="li-link">AnyGuests</li>
            </Link>
            <i className="h5-text prime-color-text fas fa-search"></i>
          </ul>
        </div>
        <div className="last-nav flex-row">
          <ul className="nav-connect nav-links">
            <p className="h5-text">Become a Host</p>
            <i className="h4-text fas fa-globe"></i>
            <Link to="/user" className=" nav-connect-a li-link-a">
              <li className="connect-link h6-text flex-col-center">
                <i className="fas fa-user  h5-text"></i>
                <p className="h6-text i-link-nav-name">User</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
