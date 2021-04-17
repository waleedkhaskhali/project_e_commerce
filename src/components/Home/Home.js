import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <section className="main">
        <div className="container">
          <h1 className="header">Fast.</h1>
          <h2 className="header">Simple.</h2>
          <h3 className="header">Affordable.</h3>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
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
