import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "../Form/SearchInput";



const Header = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              🛒 Catalogue App
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li style={{textAlign:"center",margin:"4px",padding:"4px"}} className="nav-item">Hello Ayush | </li>
              <li style={{textAlign:"center",margin:"4px",padding:"4px"}} className="nav-item">ayushshukla7777@gmail.com   </li>
              <li className="nav-item">



                <SearchInput />
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
