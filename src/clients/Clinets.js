import { colors } from "@mui/material";
import React from "react";
import CLogo from "../assets/imges/Clogo.png";
import "./Clients.css";
const Clinets = () => {
  const data = [
    { name: "Etihad Railway" },
    { name: "CNCM LLC" },
    { name: "URHope Foodbank" },
    { name: "Tech Locate " },
  ];
  return (
    <div className="clinet-home">
      <div className="clients">
        <p className="client-title">Companies Grow With Us</p>
      </div>

      <div style={{}} className="clients-container">
        {data.map((item) => {
          return (
            <div style={{}} className="clients-card">
              <img className="client-image" alt="" src={CLogo} />

              <p
              className="clinet-name"
               
              >
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Clinets;
