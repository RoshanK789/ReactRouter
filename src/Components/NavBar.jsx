import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
           {/*<nav classNameName="navbar navbar-expand-lg ">
                    <Link to='/'>All</Link>
                    <Link to='/FullStackDevelopment'>FullStackDevelopment</Link>
                    <Link to='/CyberSecurity'>CyberSecurity</Link>
                    <Link to='/DataScience'>DataScience</Link>
                    <Link to='/Carrer'>Carrer</Link>
                    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span classNameName="navbar-toggler-icon"></span>
                    </button>
    </nav>*/}
            <nav className="navbar navbar-expand-lg p-4">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to='/'>All</Link>
        </li>
        <li className="nav-item">
        <Link to='/FullStackDevelopment'>FullStackDevelopment</Link>
        </li>
        <li className="nav-item">
        <Link to='/CyberSecurity'>CyberSecurity</Link>
        </li>
        <li className="nav-item">
        <Link to='/DataScience'>DataScience</Link>
        </li>
        <li className="nav-item">
        <Link to='/Carrer'>Carrer</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default NavBar;