import React from "react";
import { colors } from "../assets/Color";
import "./Email.css";
const Emailcard = () => {
  return (
    <main className="email-card">
      <section className="email-card-container">
        <div className="email-content-container">
          <p className="email-content">
            Wow! You are here. Seems like you have a query!
            <br />
            Fill the form with correct data.
            <br />
            We will get in touch with you in hours
          </p>
        </div>

        <div className="inp-container">
        
          <input type="text"  className="input-email" placeholder="Enter Your Good Name  ...." />
          <input      type="email" className="input-email" placeholder="Enter Your Email ID ...." />
          <div>
          </div>
         

          <button className="email-btn">Enter</button>
        </div>
       
      </section>
    </main>
  );
};

export default Emailcard;


// 