
import "./Home.css";

function Home() {
  const openPayPalIndia = () => {
    window.location.href = "https://www.paypal.com/in/home";
  };

  return (
    <main className="home">
      <div className="business-toggle">
        <button
          type="button"
          className="toggle-personal"
          onClick={openPayPalIndia}
        >
          Personal
        </button>

        <span className="toggle-business">Business</span>
      </div>

      <section className="hero-content">
        <h1>PayPal Open</h1>

        <h2>One platform for your business needs</h2>

        <p>
          PayPal Open unifies your PayPal business solutions to help you get
          paid, get growing, and get ahead.
        </p>

        <div className="hero-buttons">
          <span className="hero-button signup">Sign Up</span>
          <span className="hero-button contact">Contact Sales</span>
        </div>
      </section>
    </main>
  );
}

export default Home;
