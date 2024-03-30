import {NavLink, useNavigate} from "react-router-dom"
import logo from "../assets/cyberfortress.jpg"
// FaXTwitter FaInstagram,
import { FaFacebookF, FaLinkedinIn, FaYoutube} from "react-icons/fa6";
export default function Footer() {
    const navigate = useNavigate()

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    }

  return (
    <div className='footer'>
        <div className="footer-logo">
            <img 
                src={logo}
                alt='logo at the footer'
            />
        </div>
        <div className='footer-main-content'>
            <div className='links'>
                <p>Quick Links</p>
                <ul>
                    <li onClick={()=>{navigate("/");scrollToTop()}}>Home</li>
                    <li onClick={()=>{navigate("/About");scrollToTop()}}>About us</li>
                    <li onClick={()=>{navigate("/security-infrastruture");scrollToTop()}}>Services</li>
                    {/* <li>Resources</li> */}
                    <li onClick={()=>{navigate("/Contactus");scrollToTop()}}>Contact Us</li>
                </ul>
            </div>
            <div className='findus'>
                <p>Find Us</p>
                <ul>
                    <li>
                        Lagos Office: Lekki Lagos Nigeria.
                    </li>
                    <li>
                        United Kingdom Office: Montrose Scotland United Kingdom
                    </li>
                </ul>
            </div>
            <div className='socials'>
                <p>Follow Us</p>
                <div className='social-account'>
                    <NavLink 
                        to="https://www.facebook.com/profile.php?id=61554658478969" 
                        target="_blank"
                    >
                        <FaFacebookF  />
                    </NavLink>
                    {/* <FaXTwitter   /> */}
                    <NavLink
                        to="https://www.linkedin.com/company/cyberfortress-ltd/"
                        target="_blank"
                    >
                        <FaLinkedinIn />
                    </NavLink>
                    {/* <FaInstagram  /> */}
                    <NavLink
                        to="https://youtube.com/@CyberFortress-Sec?si=tj2luwfgb9LOIGiC"
                        target="_blank"
                    >
                        <FaYoutube   />
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}
