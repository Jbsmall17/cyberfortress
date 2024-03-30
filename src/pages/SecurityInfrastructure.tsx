import Header from '../components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock} from '@fortawesome/free-solid-svg-icons'
import Benefits from '../components/Benefits'

export default function SecurityInfrastructure() {
  return (
    <div className='security-page'>
        <Header />
        <div className='security-hero'>     
        <div className="right-angle-triangle"></div>
        <div className='security-title'>
            <FontAwesomeIcon icon={faLock} size="xl" style={{color: "#ffffff"}} />
            <p>Security Infrastructure</p> 
        </div>     
        </div>
        <div className='services-main-content'>
            <div>
                <p>
                    Fortify Your Future: Elevate Your Business with Our Robust Security Infrastructure Services
                </p>
            </div>
            <div>
                <p>
                    Experience unparalleled proficiency with our Security Infrastructure services.
                    Our dedicated team of experts blends advanced technologies with a deep understanding 
                    of cybersecurity, ensuring the fortification of your digital assets. From robust firewalls 
                    to encryption protocols, we implement cutting-edge 
                    solutions that evolve with the ever-changing threat landscape.
                </p>
                <p>
                    Elevate your security posture with us. Conducting thorough vulnerability assessments, 
                    we tailor strategic measures to guarantee the confidentiality, integrity, and availability of your critical data. 
                    Trust in our unwavering commitment to excellence and empower your business with a secure and resilient foundation.
                </p>
            </div>
            
        </div>
        {/* <Services/> */}
        <Benefits />
        <Footer />
    </div>
  )
}
