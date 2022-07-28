import React from 'react'
import { colors } from '../assets/Color'

const Emailcard = () => {
  return (
    <main  style={{  backgroundColor:"#f3fbfb" , display:'flex' , justifyContent:"center" , height:"60vh"}}>
    
    <section  style={{ backgroundColor:"black" , marginTop:70, width:"70% "  , borderRadius:20 , height:"70%"}}>
    
    <div  style={{display:"flex", justifyContent:"center" }} >
    <p    style={{  fontSize:32, fontFamily:"Inter" ,fontWeight:"bold" , marginTop:40  , color:"white" , textAlign:"center"}}>Your data security is our <br />first priority</p>
    </div>
    <div  style={{display:"flex", justifyContent:"center" }} >
    <p    style={{  fontSize:18, fontFamily:"Inter" ,fontWeight:"200" , marginTop:40  , color:"white" , textAlign:"center"}}>SUSCRIBE OUR NEWS LATTER</p>
    </div>
    <div  style={{display:"flex", justifyContent:"space-between" ,
     backgroundColor:"white", width:"40%" , 
     alignItems:"center" ,
     marginLeft:310, marginTop:40, height:40,
      borderRadius:10, padding:10}} >
<input  style={{ width:"80%" , height:30 , border:"none"}} placeholder='ENTER YOUR EMAIL ADDRESS HERE .'  />
<button  style={{ height:28 , width:80 , backgroundColor:colors.green, border:"none" , borderRadius:6}}>Enter</button>
    </div>
    </section>
    </main>
  )
}

export default Emailcard