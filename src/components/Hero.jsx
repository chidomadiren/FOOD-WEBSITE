import { Link } from "react-router-dom";
import burger from "../assets/burger.jpg";

function Hero() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.58), rgba(15, 23, 42, 0.7)), url(${burger})` }}
    >
      <div className="hero-content">
        <div className="hero-copy">
          <span className="eyebrow">Fresh • Fast • Flavorful</span>
          <h1>
            Delicious Food
            <br />
            Made With Love
          </h1>

          <p>
            Experience fresh meals, amazing flavors and unforgettable moments at
            Chichie Restaurant.
          </p>

          <div className="cta-group">
            <Link to="/contact" className="primary-btn">
              Order Now
            </Link>

            <Link to="/menu" className="secondary-btn">
              View Menu
            </Link>
          </div>
        </div>

        <div className="hero-stat-card">
          <span className="stat-badge">Chef's special</span>
          <h3>Signature Burger</h3>
          <p>Fresh beef, melted cheese, crispy lettuce, and house sauce.</p>

          <div className="stat-row">
            <span>4.9/5</span>
            <span>$12.90</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;