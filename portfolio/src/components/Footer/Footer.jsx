import './Footer.css'

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      
      <div className="footer">

        <div className="footer-left">
            <h2 className="candidate-name">About me</h2>
            <p className='profession'>I’m a Full Stack Developer who builds fast, clean, and user-friendly web applications from scratch, turning complex problems into simple solutions.</p>
        </div>

        <div className="footer-center">
            <h3>Useful Links</h3>

             <li><a href="">Home</a></li>
             <li><a href="">Services</a></li>
             <li><a href="">About</a></li>
             <li><a href="">Projects</a></li>
             <li><a href="">Testimonials</a></li>
        </div>

        <div className="footer-right">
                <h3>Follow Me</h3>
                <ul>
                 <li><a href=""><FaGithub /></a></li>
                 <li><a href=""><FaLinkedin /></a></li>
                 <li><a href=""><FaInstagram /></a></li>
                 <li><a href=""><FaXTwitter /></a></li>
                </ul>
        </div>

      </div>

    </div>
  )
}

export default Footer
