import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <section className="main">
        <div className="adill">
          <h1 className="egg">THE MOST BEAUTIFUL BIKES OUT THERE</h1>

          <Link className="shop-button" to="/Products">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
