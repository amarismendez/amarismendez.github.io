import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg navbar-custom justify-content-between">
            <p className="logo" onClick={() => {navigate("/")}}>Amaris Mendez</p>
            {/* <iframe src="https://giphy.com/embed/KGhpQ5NMoWKQurlHwI" class="giphy-embed"/> */}
            <div className="links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="https://github.com/amarismendez" className="nav-link">GitHub</Link>
                <Link to="https://www.linkedin.com/in/amarismendez/" className="nav-link">LinkedIn</Link>
                <Link to="https://docs.google.com/document/d/1iB4zo_p9niamKORP2AqGLIm-z1T5L1h6/edit?usp=sharing&ouid=109755686841349365672&rtpof=true&sd=true" className="nav-link">CV</Link>
            </div>
        </nav>
        
    );
}