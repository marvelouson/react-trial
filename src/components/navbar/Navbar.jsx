import React from "react";
import NavbarLogo from "./NavbarLogo";
import Nav from "./Navs"

function Navbar() {

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <NavbarLogo />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Nav />
      </div>
    </nav>
  );
}

export default Navbar;