import React from 'react'
import "./TestimonialCard.css"
const TestimonilCard = () => {
  return (
    <div className="test-container">
     <div className="test-cards-container">
      <div className="test-cards">
        
          <img
            src="https://preview.colorlib.com/theme/cohost/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp"
            className="test-card-image"
            alt=""
          />
          <h2
            className="test-card-name"
            style={{ textAlign: "center", padding: 10 }}
          >
            Mark web
          </h2>
          <p className="test-card-desig">software developer</p>
          <p className="test-card-desc">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.{" "}
          </p>
       
      </div>
    </div>
   </div>
  )
}

export default TestimonilCard