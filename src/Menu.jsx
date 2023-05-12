import { useEffect, useState } from "react";
import "./menu.css";

export function Menu() {
  const [menu, setMenu] = useState("none");

  function viewMenu() {
    setMenu("block");
  }

  function closeMenu() {
    setMenu("none");
  }

  useEffect(() => {}, [menu]);

  return (
    <>
      <header>
        <picture className="img-header">
          <source
            media="(max-width:376px)"
            srcSet="/img/mobile/image-hero.jpg"
          />
          <img src="/img/desktop/image-hero.jpg" />
        </picture>

        <nav>
          <img className="logo-menu" src="/img/logo.svg" />

          

          <div className="navbar-desktop" >
            <ul className="navbar-nav">
              <li>
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Events
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="btn-menu" onClick={() => viewMenu()}>
            <img className="view-menu" src="/img/icon-hamburger.svg" />
          </div>

          <div className="navbar-collapse" style={{ display: menu }}>
            <img onClick={() => closeMenu()} className="close-menu" src="/img/icon-close.svg" />
            <ul className="navbar-nav">
              <li>
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Events
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="title-page">
          <h1>Immersive experiences that deliver</h1>
        </div>
      </header>
    </>
  );
}
