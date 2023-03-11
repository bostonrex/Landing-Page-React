import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-md">
    <a className="navbar-brand text-white fs-4 ms-3" href="#">Start Bootstrap</a>
  </div>
  <div className="navbar-nav d-flex justify-content-end me-3">
  <a className="nav-link text-white"  href="#">Home</a>
  <a className="nav-link text-white"  href="#">About</a>
    <a className="nav-link text-white"  href="#">Service</a>
    <a className="nav-link text-white"  href="#">Contact</a>
  </div>
</nav>
    );
};

export default NavBar;