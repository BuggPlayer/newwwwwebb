
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TestimonilCard from "./TestimonilCard";




const Testimonial = () => {
  return (
    <main   style={ { backgroundColor:"#f3fbfb" , height:"80vh"  ,}}>
    <div  style={{ display:"flex", justifyContent:"center" , alignContent:"center"}}>
    <p  style={{  fontSize:36 , fontFamily:"Inter"  , fontWeight:600 , marginTop:20}}>Our Best Clients Words</p></div>
    <Swiper
            modules={[Navigation, Pagination,]}
            spaceBetween={30}
            slidesPerView={4}
            navigation
            style={{ width:"100%", height:"32em"}}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {[1,2,3,4,6,6,6,].map((item) => (
              <SwiperSlide>
              <div  style={{ marginLeft:30 , marginTop:60 }}>
              <TestimonilCard  />
              </div>


              </SwiperSlide>
            ))}
          </Swiper>
    
    
    </main>
  )
}

export default Testimonial