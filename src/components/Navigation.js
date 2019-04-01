import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css";

const Navigation = (props) => {
  return (
    <nav className="nav">
      <ul className="menu">
        <li className="menu__item"><NavLink className="menu__item--btn" to="/today" activeClassName="menu__item--btnActive">Today</NavLink></li>
        <li className="menu__item"><NavLink to="/forecast" className="menu__item--btn" activeClassName="menu__item--btnActive">Forecast</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;