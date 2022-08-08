import React from "react";
import FeatureCard from "./FeatureCard";
import "./Features.css";
import Grid from "@mui/material/Grid";


const Features = () => {
  const data = [
    {
      name: "Webapp development",
      icons: "",
      desc: "This blog will help you to make your career in the field of web development by guiding exactly what you need to study, how to implement them by making projects, ",
    },
    {
      name: "MobileApp development",
      icons: "",
      desc: "This blog will help you to make your career in the field of web development by guiding exactly what you need to study, how to implement them by making projects, ",
    },

    {
      name: "Data analytics & Solutions",
      icons: "",
      desc: "This blog will help you to make your career in the field of web development by guiding exactly what you need to study, how to implement them by making projects, ",
    },
    {
      name: "Cloud Service",
      icons: "",
      desc: "This blog will help you to make your career in the field of web development by guiding exactly what you need to study, how to implement them by making projects, ",
    },
    {
      name: "Consulting Service",
      icons: "",
      desc: "This blog will help you to make your career in the field of web development by guiding exactly what you need to study, how to implement them by making projects, ",
    },
    {
      name: "Digital Marketing",
      icons: "",
      desc: "This blog will help you to make your career in the field of web development by guiding exactly what you need to study, how to implement them by making projects, ",
    },
  ];
  return (
    <main  className="features-main" >
      <section  className="feature-section" >
        <p className="feature-title">Services</p>
      </section>

      <section >
        <Grid container>
          <div className="services-card">
            {data.map((item) => (
              <Grid item md={4} xs={12} className="service-card-container">
                <FeatureCard item={item} />
              </Grid>
            ))}
          </div>
        </Grid>
      </section>
    </main>
  );
};

export default Features;
