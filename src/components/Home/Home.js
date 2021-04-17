import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <section className="main">
        <div className="container">
          <h1 className="header">Simple.</h1>
          <h2 className="header">Affordable.</h2>
          <h3 className="header">Efficient.</h3>
          <h4 className="header">Fast.</h4>
          <div>
            <Link className="shop-button" to="/Products">
              Get It Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
