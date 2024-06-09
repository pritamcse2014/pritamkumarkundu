import './Hero.css'
import pritam from '../../assets/pritam.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={pritam} alt="Profile Image" />
            <h1><span>I'm Pritam Kumar Kundu,</span> frontend developer based in Bangladesh.</h1>
            <p>I am a frontend developer from Dhaka, Bangladesh with 1 years+ of experience in companies like Tech Jodo.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    );
};

export default Hero;