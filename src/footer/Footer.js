import React from 'react'
import { colors } from '../assets/Color'
import { SiInstagram } from 'react-icons/si';
import { SiFacebook } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';

const Footer = () => {
  return (
    <main  style={{  height:"45vh" }} > 
    <section    style={{ display:"flex" , justifyContent:"space-between" ,paddingLeft:80 , paddingRight:80, marginTop:80 }} >
    <div  style={{  }}>
    <p    style={{  fontFamily:"Inter" , fontSize:23, fontWeight:"bold" , }}   >  Compasslary</p>
    <p c     style={{ marginTop:20 , fontFamily:"Inter", fontSize:15, lineHeight:1.3  }}>we are working on software <br/>developm team and making  <br/> and user frindlky porod<br/> dgebwg wbeg egq egjhwrg </p>
    <div  style={{ display:"flex" , marginTop:40 , justifyContent:"space-between"}}>
   <SiInstagram  style={{color:"gray"}}   size={25}  />
   <SiFacebook style={{color:"gray"}}   size={25} />
   <SiLinkedin  style={{color:"gray"}}   size={25}/>
   <SiTwitter style={{color:"gray"}}   size={25} />
    </div>
</div>
  
    <div>
    <p     style={{  fontFamily:"Inter" , fontSize:23, fontWeight:"bold" , }} >Quick menu</p>
    <p  style={{ marginTop:20 , fontFamily:"Inter", fontSize:15, lineHeight:1.3  }}>Home</p>
    <p style={{marginTop:15}}>Features</p>
    <p  style={{marginTop:15}}>Projects</p>
    <p style={{marginTop:15}}>Testimonial</p>
    <p style={{marginTop:15}}>why choose us?</p>
    </div>
    <div>
    <p     style={{  fontFamily:"Inter" , fontSize:23, fontWeight:"bold" , }} >Our support</p>
    <p c     style={{ marginTop:20 , fontFamily:"Inter", fontSize:15, lineHeight:1.3  }}>we are working on software <br/>developm team and making  <br/> and user frindlky porod<br/> dgebwg wbeg egq egjhwrg </p>
    </div>
    <div>
    <p     style={{  fontFamily:"Inter" , fontSize:23, fontWeight:"bold" , }} >Our support</p>
    <p c     style={{ marginTop:20 , fontFamily:"Inter", fontSize:15, lineHeight:1.3  }}>we are working on software <br/>developm team and making  <br/> and user frindlky porod<br/> dgebwg wbeg egq egjhwrg </p>
    </div>
    
    </section>
    


    <hr  style={{marginTop:40 ,  color:"lightgray"}} />
    <div  style={{marginTop:30 , display:"flex" , justifyContent:"center"}}>
   <p>©  2022 compasslary all Rights reserved</p> copyright
    </div>
    </main>
  )
}

export default Footer