import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export default function AppHeader(props) {
  return (
    <div className="app-header">
      <div className="app-header__logo">
        <Link to="/">
          <img src={logo} className="responsive" alt="Tera Logo" />
        </Link>
      </div>
      <div className="app-header__menu">
        <i onClick={() => props.setIsOpen(true)} className="fa fa-bars"></i>
      </div>
    </div>
  );
}
