import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/em-project.png";
import Ecommerce from "../../img/job project .png";
import labcare from "../../img/labcare.png";
import real from "../../img/real1.png";
import MusicApp from "../../img/khatabook.png";
import empl from "../../img/empl.png";
import dash from "../../img/dash.png";
import { themeContext } from "../../Context";
import { Autoplay } from "swiper";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="projects">
      
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="portfolio-slider"
      >
        
        <SwiperSlide>
          
          <a href="https://eminenceacademy.netlify.app" target="_blank">
            
            <img src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          
          <a href="https://emsystemdev.netlify.app/" target="_blank">
            
            <img src={empl} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          
          <a href="https://1700ebooks.netlify.app/" target="_blank">
            
            <img src={labcare} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          
          <a href="https://nextgendev.netlify.app/" target="_blank">
            
            <img src={real} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          
          <a href="https://khatabookdev.netlify.app" target="_blank">
            
            <img src={MusicApp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          
          <a href="https://desig-dashboard.netlify.app/" target="_blank">
            
            <img src={dash} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
