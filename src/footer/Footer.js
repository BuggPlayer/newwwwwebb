import React from "react";
import { colors } from "../assets/Color";
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { Grid } from "@mui/material";
import "./footer.css";
const Footer = () => {
  return (
    <main className="footer">
      <Grid container style={ {  marginTop  :"2rem" }}>
        <Grid item md={3} xs={12} sm={12} className="footer-c">
          <div  style={{ marginLeft:15 }}>
            <p className="f-logo">Compasslary</p>
            <p className="f-desc">Point. Where Dots Connect!</p>
            <div className="f-social-links">
              <SiInstagram style={{ color: "gray" }} size={25} />
              <SiLinkedin style={{ color: "gray" }} size={25} />
              <SiFacebook style={{ color: "gray" }} size={25} />
              <SiTwitter style={{ color: "gray" }} size={25} />
            </div>
          </div>
        </Grid>



        
        <Grid item md={3} xs={12} sm={12}  style={{ marginLeft:15 }} className="footer-c">
          <div className="quick-links">
            <p className="f-logo">Quick menu</p>
            <p className="f-q-links">Home</p>
            <p className="f-q-links">Services</p>
            <p className="f-q-links">Companies Grow With Us</p>
            <p className="f-q-links">Testimonial</p>
            <p className="f-q-links">Contact Us </p>
            <p className="f-q-links">Careers</p>
          </div>
        </Grid>
        <Grid item md={3} xs={12} sm={12}  style={{ marginLeft:15 }} className="footer-c">
          <div>
            <p className="sprt-f">Our Branches</p>
            <p className="f-q-links">Mumbai, India (HQ)</p>
            <p className="f-q-links">Virginia, USA</p>
            <p className="f-q-links">Dubai, UAE</p>
          </div>
        </Grid>
        <Grid item md={3} xs={12} sm={12} style={{ marginLeft:15 }}  className="footer-c">
          <div>
            <p className="sprt-f">Community</p>

            <p className="f-q-links">Compasslary Community</p>
            <p className="f-q-links">Blog</p>
          </div>
        </Grid>
      </Grid>

      <hr style={{ marginTop: 40, color: "lightgray" }} />
      <div
       className="copyright-main"
       
      >
        <p className="copyright-text"  >
          © 2022 compasslary all Rights reserved
        </p>
        copyright
      </div>
    </main>
  );
};

export default Footer;
