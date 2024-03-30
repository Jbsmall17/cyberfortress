import Header from '../components/Header';
import Footer from '../components/Footer';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function About() {

 // aos initialization
 useEffect(() => {
  Aos.init();
},[])
// aos initialization

  return (
    <div>
      <Header />
      <div className="about-us-header">
        <h1>
          About Us
        </h1>
      </div>
      <main className="major-content">
        <section data-aos='fade-left'>
          <h1>Our Vision</h1>
          <p>
            At Cyberfortress, we envision a digital realm where individuals and organizations thrive securely. Our vision extends beyond mere protection; we aspire to empower you in embracing the boundless opportunities of the digital age without fear. We dream of a connected world where cybersecurity is not just a necessity but a seamless part of your online journey.
          </p>
        </section>
        <section data-aos='fade-left'>
          <h1>Our Mission</h1>
          <p>
            Our mission is clear: to fortify your digital legacy against emerging threats. We are on a mission to provide unparalleled cybersecurity solutions tailored to your unique needs. From securing your networks and infrastructure to ensuring the resilience of your applications, we leave no digital stone unturned.
          </p>
        </section>
        <section data-aos='fade-left'>
          <h1>Our Team</h1>
          <p>
            Welcome to Cyberfortress, where our team of dedicated cybersecurity professionals is committed to securing your digital future. Our experts bring a wealth of experience and diverse skills to address the ever-evolving challenges of the digital landscape. From seasoned cybersecurity veterans to innovative young minds, we unite under a common goal: safeguarding your online presence.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
