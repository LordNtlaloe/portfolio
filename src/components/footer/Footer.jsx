import React from "react";
import './Footer.css';

export default function Footer() {
    return (
        <footer className="section footer">
            <div className="footer footer-container">
                <h1 className="footer-title">Ntlaloe</h1>
                <ul className="footer-list">
                    <li>
                        <a href="#about" className="footer-link">About</a>
                    </li>
                    <li>
                        <a href="#experience" className="footer-link">Experience</a>
                    </li>
                    <li>
                        <a href="#services" className="footer-link">Services</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer-link">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer-link">Contact</a>
                    </li>
                </ul>
                <div className="footer-socials">
                    <a href="https://www.instagram.com/lord.ntlaloe/" className="footer-social-icon"
                        target={"_blank"}>
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://github.com/LordNtlaloe" className="footer-social-icon"
                        target={"_blank"}>
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/teboho-ntlaloe-189387199/" className="footer-social-icon"
                        target={"_blank"}>
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>
                <span className="footer-copy">
                    &#169; <a href="https://teboho-ntlaloe-portfolio.netlify.app/">&nbsp;Teboho Ntlaloe</a>&nbsp;{new Date().getFullYear()}. All Rights Reserved
                </span>
            </div>
        </footer>
    )
}
