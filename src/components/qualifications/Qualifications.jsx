import React from "react";
import './Qualifications.css';
import {
    useState
} from "react";

export default function Qualifications() {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualifications section" id="portfolio">
            <h2 className="section-title">Qualifications</h2>
            <span className="section-subtitle">My Personal Journey</span>

            <div className="qualifications-container container">
                <div className="qualifications-tabs">
                    <div className={
                        toggleState === 1 ? "qualifications-button button-flex qualifications-active" : "qualifications-button button-flex"
                    }>
                        <i className="uil uil-graduation-cap qualifications-icon"></i>
                        Education
                    </div>
                    <div className= {toggleState === 2 ? "qualifications-button button-flex qualifications-active" : "qualifications-button button-flex"}>

                        <i className="uil uil-briefcase-alt qualifications-icon"></i>
                        Experience
                    </div>
                </div>
                <div className="qualifications-sections">
                    <div className= {toggleState === 1 ? "qualifications-content qualifications-content-active" : "qualifications-content"}
                        onClick={
                            () => toggleTab(1)
                    }>

                        <div className="qualifications-data">
                            <div>
                                <h3 className="qualifications-title">Web Developer Intern</h3>
                                <span className="qualifications-subtitle">Sustainable Living</span>
                                <div className="qualifications-calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualifications-rounder"></span>
                                <div className="qualifications-line"></div>
                            </div>
                        </div>

                        <div className="qualifications-data">
                            <div></div>
                            <div>
                                <span className="qualifications-rounder"></span>
                                <span className="qualifications-line"></span>
                            </div>

                            <div>
                                <h3 className="qualifications-title">Freelancer</h3>
                                <span className="qualifications-subtitle">Maseru</span>
                                <div className="qualifications-calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - Present
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className= {toggleState === 2 ? "qualifications-content qualifications-content-active" : "qualifications-content"} onClick= { () => toggleTab(2)}>


                        <div className="qualifications-data">
                            <div>
                                <h3 className="qualifications-title">Web Designer</h3>
                                <span className="qualifications-subtitle">Sustainable Living</span>
                                <div className="qualifications-calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualifications-rounder"></span>
                                <span className="qualifications-line"></span>
                            </div>
                        </div>

                        <div className="qualifications-data">
                            <div></div>
                            <div>
                                <span className="qualifications-rounder"></span>
                                <span className="qualifications-line"></span>
                            </div>

                            <div>
                                <h3 className="qualifications-title">Data Clerk</h3>
                                <span className="qualifications-subtitle">Maseru</span>
                                <div className="qualifications-calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - Present
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
