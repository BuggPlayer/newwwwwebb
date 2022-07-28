import React from 'react'
import FeatureCard from './FeatureCard'
import "./Features.css"
import Grid from "@mui/material/Grid";

import { BiDesktop } from 'react-icons/bi';
import { BiMobileAlt } from 'react-icons/bi';
import { AiOutlineCloudDownload } from 'react-icons/ai';

import { GiOfficeChair } from 'react-icons/gi';
import { RiBattery2ChargeFill } from 'react-icons/ri';

const Features = () => {

  const data =[{ name:"Webapp development" , icons:"" , desc:"This blog will help you to make your career in the field of web development by guiding exactly what you need to study, how to implement them by making projects, "  },
  { name:"MobileApp development" , icons:"" , desc:"This blog will help you to make your career in the field of web development by guiding exactly what you need to study, how to implement them by making projects, "  },
  


     { name:"Data analytics & Solutions", icons:'' , desc:"This blog will help you to make your career in the field of web development by guiding exactly what you need to study, how to implement them by making projects, "  },
  { name:"Cloud Service" , icons:"" , desc:"This blog will help you to make your career in the field of web development by guiding exactly what you need to study, how to implement them by making projects, "  },
  { name:"Consulting Service" , icons:"" , desc:"This blog will help you to make your career in the field of web development by guiding exactly what you need to study, how to implement them by making projects, "  },
  { name:"Digital Marketing" , icons:"" , desc:"This blog will help you to make your career in the field of web development by guiding exactly what you need to study, how to implement them by making projects, "  }]
  return (
    <main   style={{ backgroundColor:"#f3fbfb" ,  height:"100vh" }}>
    <section   style={{  display:"flex" , justifyContent:"center" }}>

    <p  style={{ fontSize:36 , fontFamily:"Inter"  , fontWeight:600 , marginTop:40 }} >
    Special Features We Provide
    </p>
    
    </section>

    <section   style={{ marginTop:30}}>
    <Grid container >
       
        <div className="services-card">
          {data.map((item) => (
            <Grid item md={4} xs={12} className="service-card-container">
              <FeatureCard  item={item}   /> 
            </Grid>
          ))}
        </div>
      </Grid>



    </section>
    
    </main>
  )
}

export default Features