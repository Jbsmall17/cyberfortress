import Header from '../components/Header'
import Footer from '../components/Footer'
// import Accordion from '../components/Accordion'
import { useEffect } from 'react'
import Faq from '../components/Faq'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from '../components/Services';



// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules'
// import 'swiper/css';
// import 'swiper/css/autoplay'

export default function Home() {
     // aos initialization
    useEffect(() => {
        Aos.init();
    },[])
    // aos initialization


    // slider

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    // slider









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
        <div className='slider-item'>
            <h1 className="header-text-subheading" data-aos='fade-up'>
                Guardians of the Digital Realm: Fortifying Your Future Online
            </h1>
            <p className="header-text-content" data-aos='fade-up'>
                Navigating the Ever-Evolving Digital Landscape: Your Trusted Partner in Cybersecurity, Offering Cutting-Edge Solutions to Safeguard Your Online Presence and Fortify Your Digital Legacy Against Emerging Threats.
            </p>
        </div>
        <div className='slider-item si2'>
            <h1 className="header-text-subheading" data-aos='fade-up'>
                Guardians of the Digital Realm: Fortifying Your Future Online
            </h1>
            <p className="header-text-content">
                Navigating the Ever-Evolving Digital Landscape: Your Trusted Partner in Cybersecurity, Offering Cutting-Edge Solutions to Safeguard Your Online Presence and Fortify Your Digital Legacy Against Emerging Threats.
            </p>
        </div>
        <div className='slider-item si3'>
            <h1 className="header-text-subheading" data-aos='fade-up'>
                Guardians of the Digital Realm: Fortifying Your Future Online
            </h1>
            <p className="header-text-content" data-aos='fade-up'>
                Navigating the Ever-Evolving Digital Landscape: Your Trusted Partner in Cybersecurity, Offering Cutting-Edge Solutions to Safeguard Your Online Presence and Fortify Your Digital Legacy Against Emerging Threats.
            </p>
        </div>
    </Slider>

      {/* <div className='services'>
        <p data-aos="fade-up">What We Do</p>
        <div className='services-container'>
            <div className='service' data-aos="fade-up">
                <p className='service-title'>
                    Security Infrastruture
                </p>
                <p className='service-desc'>
                  Security infrastructure refers to the framework of technologies, processes, and policies implemented by an organization to safeguard its information, assets, and operations from various threats and risks. The primary goal of security infrastructure is to establish a robust defense mechanism that protects against unauthorized access, data breaches, cyberattacks, and other potential security incidents.
            </div>
            <div className='service' data-aos="fade-up">
                <p className='service-title'>
                    Network Intrusion Detection Systems
                </p>
                <p className='service-desc'>
                  Intrusion Detection and Prevention Systems (IDPS): IDPS are tools that monitor network or system activities for malicious behavior or security policy violations. They can detect and respond to security incidents in real-time, helping to mitigate potential risks.
                </p>
            </div>
            <div className='service'  data-aos="fade-up">
                <p className='service-title'>
                    Firewalls
                </p>
                <p className='service-desc'>
                   These are hardware or software-based barriers that monitor and control incoming and outgoing network traffic based on predetermined security rules. Firewalls play a crucial role in preventing unauthorized access and protecting against cyber threats.
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
      </div> */}
      <Services />
      {/* <Accordion/> */}
      <Faq/>
      <Footer />
    </div>
  )
}
