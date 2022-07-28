import React from 'react'
import "./Home.css"

import man from "../assets/imges/man.png"
import woman from "../assets/imges/woman.png"
import star from "../assets/imges/star.png"
import { colors } from '../assets/Color'
import { fontWeight } from '@mui/system'
const Home = () => {
  return (
    <main  className="home">
    <section>
    <p  className='home-right-title' >     <span   style={{ color:colors.green}}>  Grow</span>   <br />Your business  <br/>  With our    <span   style={{ color:colors.green}}>  solution</span>    </p>
   <p   className='home-right-sdubtitle'>greatest thing in the world is not so much <br/>where we stand as in what direction we are moving </p> 
    <button   style={{  height:50 , width:160, borderRadius:40 , color:"white",backgroundColor:"black", border:"none", marginTop:30   }}   >Try for FREE </button>
    </section>
    <section   className='home-left-img'>

    
    <div  style={{ backgroundColor:"white", height:600 }} >
    <img src={man}  style={{ height:400 , margin:20}}   />
    </div>
    
    <img src={woman}  style={{  height:450 , marginTop:100  ,backgroundColor:"white" }}    />
    </section>
    <section   className='customer-card' >
    
    <img  src= {star}/>
    
    <div>
    <p   style={{fontWeight:"bold" , fontSize:20 , fontFamily:"Inter"}}>+10</p>
    <p>happy customers</p>
    </div>
    </section>
    </main>
  )
}

export default Home