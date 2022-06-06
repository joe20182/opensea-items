import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './index.module.css';

const Header: FC = () => (
  <header className={classes.HeaderWrapper}>
    <nav className={classes.Navbar}>
      <div className="logo">LOGO</div>
      <ul className={classes.NavList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/watchlist"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Watchlist
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
