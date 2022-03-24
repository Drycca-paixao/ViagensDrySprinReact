import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          ViagensDry
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/Destino" className="nav-link text-dark ">
                Destino
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Passageiro" className="nav-link text-dark">
               Passageiro
              </Link>
            </li>            
          </ul>
        </div>
      </div>
    </nav>
  );
}
