import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Header: FC = () => (
  <header>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/watchlist">Watchlist</NavLink>
  </header>
);
export default Header;
