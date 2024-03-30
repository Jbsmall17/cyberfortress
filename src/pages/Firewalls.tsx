import Header from '../components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock} from '@fortawesome/free-solid-svg-icons'
import Benefits from '../components/Benefits'


export default function Firewalls() {
  return (
    <div className='firewalls-page'>
        <Header />
        <div className='firewalls-hero'>     
            <div className="right-angle-triangle"></div>
            <div className='firewalls-title'>
                <FontAwesomeIcon icon={faLock} size="xl" style={{color: "#ffffff"}} />
                <p>Firewalls</p> 
            </div>     
        </div>
        <div className='firewalls-main-content'>
            <div>
                <p>
                    Fortify Your Digital Defense with Our Expert Firewall Service.
                </p>
            </div>
            <div>
                <p>
                    Our skilled team crafts tailored solutions, ensuring precise and proactive defense against evolving cyber threats.
                </p>
                <p>
                    We leverage advanced technologies, staying ahead to fortify your digital assets with robust, future-ready security measures.
                </p>
            </div>
        </div>
        <Benefits />
        <Footer />
    </div>
  )
}
