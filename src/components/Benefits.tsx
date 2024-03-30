import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShield} from '@fortawesome/free-solid-svg-icons'


export default function Benefits() {
  return (
    <div className='benefit-component'>
        <p className='benefit-title'>
            Benefits Of Hiring Us
        </p>
        <div className='benefit-container'>
            <div className='benefit'>
                <FontAwesomeIcon icon={faShield} size="lg" style={{color: "#4ab98e",}} />
                <p>Protecting against digital threats for your sensitive data and systems.</p>
            </div>
            <div className='benefit'>
                <FontAwesomeIcon icon={faShield} size="lg" style={{color: "#4ab98e",}} />
                <p>
                Identifying and addressing weaknesses to reduce breach risks.
                </p>
            </div>
            <div className='benefit'>
                <FontAwesomeIcon icon={faShield} size="lg" style={{color: "#4ab98e",}} />
                <p>
                    Swift actions to minimize damage and prevent further compromises.
                </p>
            </div>
            <div className='benefit'>
                <FontAwesomeIcon icon={faShield} size="lg" style={{color: "#4ab98e",}} />
                <p>
                    Ensuring compliance with industry and government regulations.
                </p>
            </div>
            <div className='benefit'>
                <FontAwesomeIcon icon={faShield} size="lg" style={{color: "#4ab98e",}} />
                <p>
                Assessing and managing potential threats for informed decisions.
                </p>
            </div>
            <div className='benefit'>
                <FontAwesomeIcon icon={faShield} size="lg" style={{color: "#4ab98e",}} />
                <p>
                    Entrusting professionals for a secure cybersecurity posture.
                </p>
            </div>
        </div>
    </div>
  )
}
