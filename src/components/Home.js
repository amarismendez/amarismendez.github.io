import portrait from '../images/portrait.jpg';
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div className="home">
                <div>
                    <img src={portrait} alt="portrait of me" className='portrait'/>
                </div>
                <div className="home-text">
                    <div className="hi-msg">
                        <h1 className="typewriter">Hi, I'm Amaris.</h1>
                    </div>
                    <h2 className='secondary-font'>a Software Developer based in New York.</h2>
                    <p>I am passionate about innovation in technology, and the impact it has on society. One program at a time, we can strive to create works that include everyone and make the world a better place.</p> 
                    <p>I have a bachelors in Science and Technology Studies from NYU Tandon School of Engineering. Not only did these studies allow me to learn about programming and how to bring my ideas to life in the digital world, but also the implications that these digital works have in the real world around us.</p>
                    <p>During my time at NYU, I conducted research projects on Latinx access to healthcare and STEM education as a platform to advocate for greater inclusivity in the fields of Science and Technology.</p>
                    <p>Outside of programming, my other passions include painting, graphic and interior design, and playing the bass guitar.</p>
                </div>
            </div>
            <div className='skills-and-projects'>
                <div className='skills-section'>
                    <h2 className='center-text secondary-font'>My Skills</h2>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Spring Frameworks</li>
                    <li>JUnit & Mockito Testing</li>
                    <li>MySQL</li>
                    <li>HTML & CSS</li>
                    <li>Docker</li>
                    <h2 className='center-text secondary-font mt-4'>Contact Me</h2>
                    <p className='center-text'>amarismndz@gmail.com</p>
                </div>
                <div className='projects-section'>
                    <h2 className='center-text secondary-font'>My Projects</h2>
                    <div className='project-item'>
                        <h3>Myths & Mysteries</h3>
                        <p>A social media app for paranormal lovers to connect over shared experiences and learn more about mythical legends all over the world.</p>
                        <button className='btn btn-outline-secondary' onClick={() => navigate("/mythsandmysteries")}>Learn More</button>
                    </div>
                    <div className='project-item'>
                        <h3>BiblioNook</h3>
                        <p>An organizational app for book lovers to track their reading progress and connect with others via forums.</p>
                        <button className='btn btn-outline-secondary' onClick={() => navigate("/biblionook")}>Learn More</button>
                    </div>
                </div>

            </div>
        </>
    );
}