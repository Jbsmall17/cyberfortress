import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import Accordion from '../components/Accordion'
import { useEffect } from 'react'
import { useState } from 'react';
import Faq from '../components/Faq'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules'
// import 'swiper/css';
// import 'swiper/css/autoplay'

export default function Home() {

    useEffect(() => {
        Aos.init();
    },[])
    const [animate, setAnimate] = useState({});
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => {
            // Toggle the animate state for the current slide to replay the animation
            setAnimate((prevState) => ({
              ...prevState,
              [current]: !prevState[current],
            }));
        },
    }

  return (
    <div className='homepage'>
      <Header />
      {/* <div className='hero-section'>
        <p className='para-title'>Guardians of the Digital Realm: Fortifying Your Future Online</p>
        <p className='para-desc'>
            Navigating the Ever-Evolving Digital Landscape: Your Trusted Partner in 
            Cybersecurity, Offering Cutting-Edge Solutions to Safeguard Your Online 
            Presence and Fortify Your Digital Legacy Against Emerging Threats.
        </p>
      </div> */}
      {/* <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      spaceBetween={50}
      slidesPerView={3}
      loop={true} 
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper> */}
    <Slider {...settings}>
      {[0, 1, 2].map((index) => (
        <div key={index} className={`slider-item`}>
          <h1 className={`header-text-subheading ${animate[index] ? 'animate' : ''}`}>
            Guardians of the Digital Realm: Fortifying Your Future Online
          </h1>
          <p className={`header-text-content ${animate[index] ? 'animate' : ''}`}>
            Navigating the Ever-Evolving Digital Landscape: Your Trusted Partner in Cybersecurity, Offering Cutting-Edge Solutions to Safeguard Your Online Presence and Fortify Your Digital Legacy Against Emerging Threats.
          </p>
        </div>
      ))}
    </Slider>

      <div className='services'>
        <p data-aos="fade-up">What We Do</p>
        <div className='services-container'>
            <div className='service' data-aos="fade-up">
                <p className='service-title'>
                    Security Infrastruture
                </p>
                <p className='service-desc'>
                   Ullamco sint veniam fugiat voluptate duis. Velit nisi commodo amet reprehenderit fugiat occaecat laborum. Aliquip laboris nisi ex fugiat enim. Mollit esse esse ullamco pariatur irure duis eiusmod anim. 
                </p>
            </div>
            <div className='service' data-aos="fade-up">
                <p className='service-title'>
                    Network Intrusion Detection Systems
                </p>
                <p className='service-desc'>
                   Ullamco sint veniam fugiat voluptate duis. Velit nisi commodo amet reprehenderit fugiat occaecat laborum. Aliquip laboris nisi ex fugiat enim. Mollit esse esse ullamco pariatur irure duis eiusmod anim. 
                </p>
            </div>
            <div className='service'  data-aos="fade-up">
                <p className='service-title'>
                    Firewalls
                </p>
                <p className='service-desc'>
                   Ullamco sint veniam fugiat voluptate duis. Velit nisi commodo amet reprehenderit fugiat occaecat laborum. Aliquip laboris nisi ex fugiat enim. Mollit esse esse ullamco pariatur irure duis eiusmod anim. 
                </p>
            </div>
            <div className='service' data-aos="fade-up">
                <p className='service-title'>
                    Web Application Security
                </p>
                <p className='service-desc'>
                   Ullamco sint veniam fugiat voluptate duis. Velit nisi commodo amet reprehenderit fugiat occaecat laborum. Aliquip laboris nisi ex fugiat enim. Mollit esse esse ullamco pariatur irure duis eiusmod anim. 
                </p>
            </div>
            <div className='service' data-aos="fade-up">
                <p className='service-title'>
                    Penetration Testing
                </p>
                <p className='service-desc'>
                   Ullamco sint veniam fugiat voluptate duis. Velit nisi commodo amet reprehenderit fugiat occaecat laborum. Aliquip laboris nisi ex fugiat enim. Mollit esse esse ullamco pariatur irure duis eiusmod anim. 
                </p>
            </div>
        </div>
      </div>
      {/* <Accordion/> */}
      <Faq/>
      <Footer />
    </div>
  )
}
