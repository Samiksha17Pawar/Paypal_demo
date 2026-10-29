
import "./Hero.css";

function Hero() {
  return (
    <main className="hero">
      <div className="audience-toggle">
        <span className="toggle-option">Personal</span>
        <span className="toggle-option selected">Business</span>
      </div>

      <h1>PayPal Open</h1>

      <h2>One platform for your business needs</h2>

      <p className="hero-description">
        PayPal Open unifies your PayPal business solutions to help you get
        paid, get growing, and get ahead.
      </p>

      <div className="hero-actions">
        <span className="hero-button hero-signup">Sign Up</span>
        <span className="hero-button hero-contact">Contact Sales</span>
      </div>
    </main>
  );
}

export default Hero;
