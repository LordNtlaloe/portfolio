import React from "react";
import './Skills.css';
import Frontend from "./Frontend";
import Backend from "./Backend";

export default function Skills() {
    return (
        <section className="skill section" id="experience">
            <h2 className="section-title">Skills</h2>
            <span className="section-subtitle">My Technical Level</span>

            <div className="skills-container container grid">
                <Frontend/>
                <Backend/>
            </div>
        </section>
    )
}
