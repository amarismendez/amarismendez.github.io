import homePage from "../images/biblionook/home.png";
import mybooks from "../images/biblionook/mybooks-library.png";
import addBook from "../images/biblionook/add-book.png";
import login from "../images/biblionook/login.png";
import register from "../images/biblionook/register.png";
import schema from "../images/biblionook/schema.png";
import { Link } from "react-router-dom";

export default function BiblioNook() {

    return (
        <div className="project-page">
            <h2 className="center-text secondary-font project-header">About BiblioNook</h2>
            <h3 className="center-text secondary-font">An organizational app for book lovers.</h3>
            <p className="center-text">I myself am a book lover, and I like to keep a diary of the books I've read and how I felt while reading them, as well as any favorite quotes. I was originally doing this on a physical notebook, but I felt that it would be easier if I had an app I could use to do that for me. That was when I had the idea of creating BiblioNook, an app where users can do all of the previously mentioned things.</p>
            <p className="center-text">There will also be a social media aspect to this via the Forums section of the app, where users can connect with others about the books they've read and their thoughts on them.</p>
            <p className="center-text">This application was created using Google Books API, Java, JUnit & Mockito, JavaScript, React.js, SQL, and Docker.</p>
            <p className="center-text">Note: This app is still in progress.</p>
            
            <Link to="https://github.com/amarismendez/biblionook" className="nav-link center-text page-link">View GitHub Repository</Link>
            
            <div className="photo-gallery">
                <h2 className="center-text secondary-font project-header">Gallery</h2>
                <div className="photo-gallery-item">
                    <img src={homePage}/>
                    <p className="center-text">The home page that users first see upon arrival.</p>
                </div>
                <div className="photo-gallery-item">
                    <img src={mybooks}/>
                    <p className="center-text">The MyBooks section, where users can add books to their Library, or their To Be Read list if they have not yet started reading.</p>
                </div>
                <div className="photo-gallery-item">
                    <img src={addBook}/>
                    <p className="center-text">The form used to add a book.</p>
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