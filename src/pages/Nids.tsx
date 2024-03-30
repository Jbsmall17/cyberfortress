import Header from '../components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock} from '@fortawesome/free-solid-svg-icons'
import Benefits from '../components/Benefits'


export default function Nids() {
  return (
    <div className='nids-page'>
        <Header />
        <div className='nids-hero'>     
            <div className="right-angle-triangle"></div>
            <div className='nids-title'>
                <FontAwesomeIcon icon={faLock} size="xl" style={{color: "#ffffff"}} />
                <p>Network Intrusion Detection Systems </p> 
            </div>     
        </div>
        <div className='nids-main-content'>
            <div>
                <p>Fortify Your Network: Elite Intrusion Detection Services for Unmatched Security.</p>
            </div>
            <div>
                <p>
                    With unmatched expertise in deploying Network Intrusion Detection Systems (NIDS), our team stays ahead of evolving cyber threats. Drawing on extensive experience, we secure networks across diverse industries.
                </p>
                <p>
                What sets us apart is our commitment to tailored solutions. Leveraging our NIDS proficiency, we design and implement custom-fit security measures, exceeding industry standards and fortifying your network against modern threats.
                </p>
            </div>
        </div>
        <Benefits />
        <Footer />
    </div>
  )
}
