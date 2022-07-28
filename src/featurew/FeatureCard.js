import React from 'react'
import "./FeatureCard.css"
import { ImDatabase } from 'react-icons/im';
const FeatureCard = ({item}) => {

    
  return (
  
    <div className="cards">
      <div className="card-container">
        <ImDatabase size={30}  />
        <p  style={{  marginTop:15, fontSize:20 , fontWeight:"bold"}}  >{item.name}</p>
        <p  style={{ marginTop:20 , lineHeight:1.3}} >
          {item.desc}
        </p>
      </div>
  
    </div>
  )
}

export default FeatureCard