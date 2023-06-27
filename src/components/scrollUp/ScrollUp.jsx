import React from "react";
import './ScrollUp.css';

export default function Footer() {
    window.addEventListener("scroll", function(){
        const scrollUp = this.document.querySelector(".scroll-up");
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });
    return(
    <div>
        <a href="#home" className="scroll-up">
            <i className="uil uil-arrow-up scroll-icon"></i>
        </a>    
    </div>);
}