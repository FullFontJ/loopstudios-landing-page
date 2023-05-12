import "./footer.css";

export function Footer() {
  return (
    <>
      <footer>
        <div className="nav-footer">
          <img className="logo-footer" src="/img/logo.svg" />
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
        <div className="footer-social">
          <ul>
            <li>
              <img className="icon-social" src="/img/icon-facebook.svg" />
            </li>
            <li>
              <img className="icon-social" src="/img/icon-instagram.svg" />
            </li>
            <li>
              <img className="icon-social" src="/img/icon-pinterest.svg" />
            </li>
            <li>
              <img className="icon-social" src="/img/icon-twitter.svg" />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
