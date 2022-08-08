import React from "react";
import "./Home.css";

import man from "../assets/imges/man.png";
import woman from "../assets/imges/woman.png";
import star from "../assets/imges/star.png";
import { colors } from "../assets/Color";

const Home = () => {
  return (
    <main className="home">
      <section>
        <p className="home-right-title">
          <span style={{ color: colors.green }}> Grow</span> <br />
          Your business <br /> With Our
          <span style={{ color: colors.green }}> Solution</span>
        </p>
        <p className="home-right-sdubtitle">
          Work Ethics at Compass Lady is best in the industry. <br />
          We provide free support services for one year to all
          <br /> our clients after successful completion of their projects{" "}
          <br />
          with us. We believe we are the point where dots connect{" "}
        </p>
        <button className="btn-try">Contact Us </button>
      </section>

      <section className="home-left-img">
        <img className="man-img" src={man} />

        <img className="man-img" src={woman} />
      </section>

      <section className="customer-card">
        <img src={star} />

        <div>
          <p className="count">+15</p>
          <p className="name-customer">happy customers</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
