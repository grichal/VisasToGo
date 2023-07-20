import React from "react";
import "./nav.css";
import image from "./image.png";

const Nav = () => {
  return (
    <>
      <header class="header32" id="inicio32">
        <div className="navbar">
          <div className="brand">VISAS TO GO</div>
          <div className="navBarmenu">
            <div className="navbar-item">
              <a href="#first">ACERCA DE NOSOTROS</a>
            </div>
            <div className="navbar-item">
              <a href="">PRIMERO</a>
            </div>
          </div>
        </div>
   
        <div className="imagencont">
          <img className="imagen" src={image} alt="" />
        </div>
        <div class="contenedor32 head32">
          <h1 class="titulo32">VISAS TO GO</h1>
          <a class="logIn32" href="#contactUs">
            CONTACTANOS
          </a>
        </div>
        
      </header>
    </>
  );
};

export default Nav;
