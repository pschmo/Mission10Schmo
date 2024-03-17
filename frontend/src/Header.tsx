import React from "react";
import logo from "./BowlingLogo.png";

function Header() {
  return (
    <header className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src={logo} className="logo img-fluid" alt="Bowling Logo" />
          </div>
          <div className="col-md-8">
            <h1 className="display-4 mb-0">Bowling League</h1>
            <p className="lead mb-0">Join the fun!</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
