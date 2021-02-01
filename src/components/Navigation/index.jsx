import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';

const Navigation = () => {
  return(
    <nav className={style.navBlock}>
        <NavLink
          exact 
          to="/"
          className={style.navLink}
          activeClassName={style.activeNav}
        >
          HOME
        </NavLink>
        <NavLink
          to="/employees"
          className={style.navLink}
          activeClassName={style.activeNav}
        >
          EMPLOYEES
        </NavLink>
    </nav>)
}

export default Navigation;