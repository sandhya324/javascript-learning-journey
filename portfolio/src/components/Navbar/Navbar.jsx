import './Navbar.css';
import assets from '../../assets/assets.js'

const Navbar = () => {
  return (
    <div className='Nav'>

      <div className="navbar">

        <div className="nav-left">
           <div className="logo">
            <img src={assets.profile} alt="profile" />

            <div className="logo-text">
               <h3 className="candidate-name">StudentName</h3>
               <p className='profession'>Full Stack Developer</p>
            </div>

           </div>
        </div>

        <div className="nav-links">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Testimonials</a></li>
          </ul>
        </div>

        <div className="nav-right">
          <ul>
            <li><a href="">Contact</a></li>
          </ul> 
        </div>

      </div>
      
    </div>
  )
}

export default Navbar
