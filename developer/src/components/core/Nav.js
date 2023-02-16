import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="header">
      <div className="header-info-wrapper">
        <Link to="/">
          <div className="logo">
            <i class="fas fa-heartbeat"></i>
            <span className="logo-title">Medi Hub</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
