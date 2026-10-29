
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="paypal-logo">
          <img
            src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
            alt="PayPal"
          />
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <a
            className="nav-link personal-link"
            href="https://www.paypal.com/in/home"
            onClick={(event) => {
              event.preventDefault();
              window.location.assign("https://www.paypal.com/in/home");
            }}
          >
            Personal <span className="arrow">⌄</span>
          </a>

          <span className="nav-link">
            Business <span className="arrow">⌄</span>
          </span>

          <span className="nav-link">
            Partners <span className="arrow">⌄</span>
          </span>

          <span className="nav-link">
            Useful Info <span className="arrow">⌄</span>
          </span>
        </nav>

        <div className="nav-actions">
          <span className="nav-button login-button">Log In</span>
          <span className="nav-button signup-button">Sign Up</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
