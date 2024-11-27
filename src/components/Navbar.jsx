import { useNavigate } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    const navigate = useNavigate(); 
    return (
        <div className="navbar-container">
            <header className="navbar-content">
                {/* Left side - Logo section */}
                <div className="navbar-logo-section">
                    <img src="onizukacolored-modified.png" className="navbar-logo"/>
                    <span className="navbar-brand">Anime Topia</span>
                </div>
                
                {/* Center - Navigation links */}
                <nav className="navbar-links">
                    <div onClick={()=> {navigate('/'); window.scrollTo(0,0);}} className="nav-link">Home</div>
                    <div onClick={()=> {navigate('/donate'); window.scrollTo(0,0);}} className="nav-link">Donate</div>
                    <div onClick={()=> {navigate('/pricing'); window.scrollTo(0,0);}} className="nav-link">Pricing</div>
                    <div onClick={()=> {navigate('/blogroll'); window.scrollTo(0,0);}} className="nav-link">Blogroll</div>
                    <div onClick={()=> {navigate('/about'); window.scrollTo(0,0);}} className="nav-link">About</div>
                </nav>

                {/* Right side - Contact button */}
                <div onClick={()=> {navigate('/contact'); window.scrollTo(0,0);}} className="navbar-contact-btn">
                    Contact us
                </div>
            </header>
        </div>
    )
}

export default Navbar