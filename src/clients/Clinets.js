import { colors } from '@mui/material'
import React from 'react'
import Logo from "../assets/imges/instalogo.jpeg"

const Clinets = () => {
  return (
   <div>
   <div style={{  marginTop:20, display:"flex" , justifyContent:"center", alignContent:"center", alignItems:"center"}}  >
   <p  style={{  fontSize:36 , fontFamily:"Inter"  , fontWeight:600 ,}}>Company Grow With Us</p>
   </div>
   
    <div  style={{  backgroundColor:"white" , display:"flex" , justifyContent:"center", alignContent:"center", alignItems:"center", height:"35vh"}}>

    {
      [1,2,3,4].map((item)=>{

        return(
          <div  style={{ display:"flex", margin:50, alignContent:"center", alignItems:"center"}}  >
          <img style={{ height:45, width:50, }}   src={Logo}  />
    
    <p  style={{  marginLeft:20 , fontFamily:"Inter", fontSize:40, fontWeight:500 , color:"gray" ,textAlign:"center"}}>google</p>
          </div>
        )
      })
    }
    
    </div>
    </div>
  )
}

export default Clinets