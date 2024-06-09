import './Navbar.css'
import logo from '../../assets/logo.svg'
import nav_underline from '../../assets/nav_underline.svg'
import { useRef, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
    const [menu, setMenu] = useState("home")
    const menuRef = useRef()
    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }
    return (
        <div className="navbar">
            <a href="/"><img src={logo} alt="Logo" /></a>
            <img src={menu_open} onClick={openMenu} alt="Menu Open" className="nav-mob-open" />
            <ul ref={menuRef} onClick={closeMenu} className="nav-menu">
                <img src={menu_close} alt="Menu Close" className="nav-mob-close" />
                <li><AnchorLink className="anchor-link"  href="#home"><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={nav_underline} alt="" /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu("about")}>About</p></AnchorLink>{menu === "about" ? <img src={nav_underline} alt="" /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={nav_underline} alt="" /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#portfolio"><p onClick={() => setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu === "portfolio" ? <img src={nav_underline} alt="" /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={nav_underline} alt="" /> : <></>}</li>
            </ul>
            <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
        </div>
    );
};

export default Navbar;