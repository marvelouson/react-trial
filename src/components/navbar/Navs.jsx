import React from "react";

function Nav() {
  return (
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active" aria-current="page" href="index.html">
          Home
        </a>
        <a className="nav-link" href="#">
          Features
        </a>
        <a className="nav-link" href="#">
          Pricing
        </a>
      </div>
    </div>
  );
}

export default Nav;
