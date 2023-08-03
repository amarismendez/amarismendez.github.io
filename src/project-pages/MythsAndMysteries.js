import homePage from "../images/mythsmysteries/home.png";
import legend from "../images/mythsmysteries/legend.png";
import comments from "../images/mythsmysteries/comments.png";
import login from "../images/mythsmysteries/login.png";
import register from "../images/mythsmysteries/register.png";
import schema from "../images/mythsmysteries/schema.png";
import { Link } from "react-router-dom";

export default function MythsAndMysteries() {

    return (
        <div className="project-page">
            <h2 className="center-text secondary-font project-header">About Myths & Mysteries</h2>
            <h3 className="center-text secondary-font">An organizational app for lovers of all things spooky and paranormal.</h3>
            <p className="center-text">This app was created in a group with two other engineers. We all shared an interest in paranormal legends and mysteries, and wanted to create a fun and educational social media app that focused on just this.</p>
            <p className="center-text">Users can explore our Legend Map (created with Leaflet) to discover new paranormal happenings all around the world. For each Legend on the map, they can share their experiences and connect with other users who may have experienced something similar. Don't see your favorite Legend? No problem! Our users can send our team a request to add new legends to the map at anytime.</p>
            <p className="center-text">This application was created using Java, JUnit & Mockito, JavaScript, React.js, SQL, Docker, and Leaflet.</p>

            <Link to="https://www.youtube.com/watch?v=kh93yuqrOgs" className="nav-link center-text page-link">Watch Demo Presentation</Link>

            <div className="photo-gallery">
                <h2 className="center-text secondary-font project-header">Gallery</h2>
                <div className="photo-gallery-item">
                    <img src={homePage}/>
                    <p className="center-text">The home page that users first see upon arrival. Our Legend Map is visible here. When users click on a legend icon, they may view the legend's full detail.</p>
                </div>
                <div className="photo-gallery-item">
                    <img src={legend}/>
                    <p className="center-text">Legend page with full detail. Pictured is the Amityville Horror House example.</p>
                </div>
                <div className="photo-gallery-item">
                    <img src={comments}/>
                    <p className="center-text">Our comments system, users can create posts of their experiences, comment on existing posts, or like/dislike a post.</p>
                </div>
                <div className="photo-gallery-item">
                    <img src={register}/>
                    <p className="center-text">The form used to register a new account. Utilizes PasswordMask library to toggle password input visibility.</p>
                </div>
                <div className="photo-gallery-item">
                    <img src={login}/>
                    <p className="center-text">The form used for returning users to log in to their account. Utilizes PasswordMask library to toggle password input visibility.</p>
                </div>
                <div className="photo-gallery-item">
                    <img src={schema}/>
                    <p className="center-text">The schema design for our database.</p>
                </div>
            </div>
        </div>
    );
}