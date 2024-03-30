import Header from '../components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock} from '@fortawesome/free-solid-svg-icons'
import Benefits from '../components/Benefits'



export default function Penetration() {
  return (
    <div className='peneration-page'>
        <Header />
        <div className='peneration-hero'>     
            <div className="right-angle-triangle"></div>
            <div className='penetration-title'>
                <FontAwesomeIcon icon={faLock} size="xl" style={{color: "#ffffff"}} />
                <p>Penetration Testing</p> 
            </div>     
        </div>
        <div className='penetration-main-content'>
            <div>
                <p>Strengthen Security: Penetration Testing Solutions.</p>
            </div>
            <div>
                <p>
                    At CyberFortress, our expert team anticipates and navigates the ever-changing landscape of cybersecurity, ensuring proactive and strategic protection for your digital assets.
                </p>
                <p>
                    Employing cutting-edge tools and methodologies, we go beyond identifying vulnerabilities to deliver thorough penetration testing services. We set and exceed industry standards, fortifying your security and keeping your digital landscape resilient
                </p>
            </div>
        </div>
        <Benefits />
        <Footer />
    </div>
  )
}
