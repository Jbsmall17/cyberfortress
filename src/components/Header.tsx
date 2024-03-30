import {useState} from 'react'
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import cyberfortress from "../assets/cyberfortress.jpg"
import {useNavigate, NavLink} from "react-router-dom"
import MobileService from './MobileService';

export default function Header() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)
    const navigate = useNavigate()

    function handleClick(){
        setIsNavbarOpen((prev)=>{
            return !prev
        })
    }
  return (
    <>
        <div className='desktop-header'>
            <img 
                src={cyberfortress}
                alt='logo'
                onClick={()=>{navigate("/")}}
            />
            <div className='navbar-links'>
                <ul className='navbar-links-list'>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li className='link-service'>
                        <NavLink to="/security-infrastruture">Services</NavLink>
                        <ul className='dropdown'>
                            <li onClick={()=> navigate("/security-infrastruture")}>
                                Security Infrastructure
                            </li>
                            <li onClick={()=>{navigate("/network-intrusion-detection-systems")}}>
                                NIDS as a Service
                            </li>
                            <li onClick={()=>{navigate("/firewalls")}}>
                                Firewalls
                            </li>
                            <li onClick={()=>{navigate("/penetration-testing")}}>
                                Penetration Testing
                            </li>
                        </ul>
                    </li>
                    {/* <li><a href="#">Resources</a></li> */}
                </ul>
                <button className='btn' onClick={()=>navigate("/contactus")}>
                    Contact Us
                </button>
            </div>
        </div>
        <div className='mobile-header'>
            <div className='mobile-header-heading'>
                <img
                    src={cyberfortress}
                    alt='logo'
                    onClick={()=> navigate("/")}
               />
                {
                    !isNavbarOpen
                    ? <HiBars3BottomRight onClick={handleClick}/>
                    : <IoCloseSharp  onClick={handleClick}/>
                }
            </div>
            <div className={!isNavbarOpen ? 'mobile-header-main-content' : 'mobile-header-main-content opened'}>
                <ul className='mobile-list'>
                    <MobileService
                        service='About'
                        link='/about'
                    >
                        <></>
                    </MobileService>
                    <MobileService
                        service='Services'
                    >
                        <ul className='mobile-dropdown'>
                            <li onClick={()=> navigate("/security-infrastruture")}>
                                Security Infrastructure
                            </li>
                            <li onClick={()=>navigate("/network-intrusion-detection-systems")}>
                                NIDS as a Service
                            </li>
                            <li onClick={()=>navigate("/firewalls")}>
                                Firewalls
                            </li>
                            <li onClick={()=> navigate("/penetration-testing")}>
                                Penetration Testing
                            </li>
                        </ul>
                    </MobileService>
                    <MobileService
                        service='Resources'
                    >
                    <></>
                    </MobileService>
                </ul>
            </div>
        </div>
    </>
  )
}
