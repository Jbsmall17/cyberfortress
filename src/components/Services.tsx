import FirewallsImg from "../assets/icons8-firewall-64.png"
import spyware from "../assets/icons8-spyware-50.png"
import antivirus from "../assets/icons8-antivirus-50.png"
import encryption from "../assets/icons8-encryption-66.png"
import access50 from "../assets/icons8-access-50.png"
import event from "../assets/icons8-event-management-50.png"
import fingerPrint from "../assets/icons8-fingerprint-scan-64.png"
import response from "../assets/icons8-response-50.png"
import audit from "../assets/icons8-audit-50.png"
import training from "../assets/icons8-training-50.png"



export default function Services() {
  return (
    <div>
        <div className='services-subheading'>
            <h1>Our Services</h1>
            <p>
                Security infrastructure refers to the framework of technologies, processes, and policies implemented by an organization to safeguard its information, assets, and operations from various threats and risks. The primary goal of security infrastructure is to establish a robust defense mechanism that protects against unauthorized access, data breaches, cyberattacks, and other potential security incidents.
            </p>
        </div>
        <section className='services-container'>
            <div className="service-item">
                <figure><img src={FirewallsImg} alt="" /></figure>
                <h3>
                    Firewalls
                </h3>
                <p>
                    These are hardware or software-based barriers that monitor and control incoming and outgoing network traffic based on predetermined security rules. Firewalls play a crucial role in preventing unauthorized access and protecting against cyber threats.
                </p>
            </div>
            <div className="service-item">
                <figure><img src={spyware} alt="" /></figure>
                <h3>
                    Intrusion Detection and Prevention Systems (IDPS)
                </h3>
                <p>
                    IDPS are tools that monitor network or system activities for malicious behavior or security policy violations. They can detect and respond to security incidents in real-time, helping to mitigate potential risks.
                </p>
            </div>
            <div className="service-item">
                <figure><img src={antivirus} alt="" /></figure>
                <h3>Antivirus and Anti-malware Software</h3>
                <p>
                    These tools are designed to identify, quarantine, and eliminate malicious software, such as viruses, worms, and ransomware, to prevent them from compromising the integrity of a system.
                </p>
            </div>
            <div className="service-item">
                <figure><img src={encryption} alt="" /></figure>
                <h3>Encryption</h3>
                <p>
                    Encryption is the process of converting information into a code to prevent unauthorized access. It is applied to data in transit, data at rest, and communication channels to ensure the confidentiality and integrity of sensitive information.
                </p>
            </div>
            <div className="service-item">
                <figure><img src={access50} alt="" /></figure>
                <h3>Access Control Systems</h3>
                <p>
                    These systems manage and restrict user access to resources based on predefined permissions. Access control mechanisms help prevent unauthorized individuals from accessing sensitive data or critical systems.
                </p>
            </div>
            <div className="service-item">
                <figure><img src={event} alt="" /></figure>
                <h3>Security Information and Event Management (SIEM)</h3>
                <p>
                    SIEM solutions collect, analyze, and correlate log data from various sources across an organization's IT infrastructure. This helps identify and respond to security incidents effectively.
                </p>
            </div>
            <div className="service-item">
                <figure><img src={fingerPrint} alt="" /></figure>
                <h3>Multi-Factor Authentication (MFA)</h3>
                <p>
                    MFA adds an extra layer of security by requiring users to provide multiple forms of identification before granting access. This helps protect against unauthorized access even if one authentication factor is compromised.
                </p>
            </div>
            <div className="service-item">
                <figure><img src={response} alt="" /></figure>
                <h3>Incident Response Plans</h3>
                <p>
                    These plans outline the steps to be taken in the event of a security incident. Having a well-defined incident response plan helps organizations respond quickly and effectively to minimize the impact of a security breach.
                </p>
            </div>
            <div className="service-item">
                <figure><img src={audit} alt="" /></figure>
                <h3>Regular Security Audits and Assessments:</h3>
                <p>
                    These plans outline the steps to be taken in the event of a security incident. Having a well-defined incident response plan helps organizations respond quickly and effectively to minimize the impact of a security breach.
                </p>
            </div>
            <div className="service-item">
                <figure><img src={training} alt="" /></figure>
                <h3>Security Policies and Training</h3>
                <p>
                    Establishing and enforcing security policies, as well as providing ongoing security awareness training for employees, are crucial components of a robust security infrastructure. Employees play a key role in maintaining a secure environment.
                </p>
            </div>
        </section>
    </div>
  )
}
