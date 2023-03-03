import React from 'react'
import InstagramLogo from './SVG/Instagram.jsx';
import FacebookLogo from './SVG/Facebook.jsx';
import GmailLogo from './SVG/Gmail.jsx';
import PhoneLogo from './SVG/Phone.jsx';
import TwitterLogo from './SVG/Twitter.jsx';
import "./styles/Footer.css"
const Footer = () => {
    return (<>
        <footer>
            <div className="socialmedia">
                <a href="#">
                    <InstagramLogo />
                </a>
                <a href="#">
                    <FacebookLogo />
                </a>
                <a href="#">
                    <GmailLogo />
                </a>
                <a href="#">
                    <PhoneLogo />
                </a>
                <a href="#">
                    <TwitterLogo />
                </a>
            </div>
            <p className="copyright">
                © 2023 Innovate. All rights reserved.
            </p>
        </footer>
    </>);
}

export default Footer;