import React from 'react';
import './Services.css';
import {
    useState
} from 'react';

export default function Services() {

    const [toggleState, setToggleState] = useState(0)
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className="section-title">Services</h2>
            <span className="section-subtitle">What I Have To Offer</span>

            <div className="services-container container grid">
                <div className="services-content">
                    <div className="">
                        <i className="uil uil-web-grid services-icon"></i>
                        <h3 className="services-title">Product<br/>Design</h3>
                    </div>
                    <span className="services-button button-flex"
                        onClick={
                            () => toggleTab(1)
                    }>
                        View More
                        <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>
                    <div className={
                        toggleState === 1 ? "services-modal active-modal" : "services-modal"
                    }>
                        <div className="services-modal-content">
                            <i className="uil uil-times services-modal-close"
                                onClick={
                                    () => toggleTab(0)
                            }></i>
                            <h3 className="services-modal-title">Product Design</h3>
                            <p className="services-modal-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quisquam voluptatum soluta facilis maiores? Temporibus accusantium corrupti commodi possimus, itaque quia id, incidunt animi dolorum consequatur quasi eos quibusdam repellendus!</p>
                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services-content">
                    <div className="">
                        <i className="uil uil-arrow services-icon"></i>
                        <h3 className="services-title">Web<br/>Designer</h3>
                    </div>
                    <span className="services-button button-flex" onClick= { () => toggleTab(2)                                                                                                                                    }>
                        View More
                        <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>
                    <div className= {toggleState === 2 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i className="uil uil-times services-modal-close" onClick= {() => toggleTab(0)}></i>
                            <h3 className="services-modal-title">Web Designer</h3>
                            <p className="services-modal-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quisquam voluptatum soluta facilis maiores? Temporibus accusantium corrupti commodi possimus, itaque quia id, incidunt animi dolorum consequatur quasi eos quibusdam repellendus!</p>
                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services-content">
                    <div className="">
                        <i className="uil uil-edit services-icon"></i>
                        <h3 className="services-title">Software<br/>Developer</h3>
                    </div>
                    <span className="services-button button-flex" onClick= {() => toggleTab(3) }>
                        View More
                        <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>
                    <div className= {toggleState === 3 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i className="uil uil-times services-modal-close" onClick= {() => toggleTab(0)}></i>

                            <h3 className="services-modal-title">Software Developer</h3>
                            <p className="services-modal-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quisquam voluptatum soluta facilis maiores? Temporibus accusantium corrupti commodi possimus, itaque quia id, incidunt animi dolorum consequatur quasi eos quibusdam repellendus!</p>
                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services-content">
                    <div className="">
                        <i className="uil uil-table services-icon"></i>
                        <h3 className="services-title">Database<br/>Designer</h3>
                    </div>
                    <span className="services-button button-flex" onClick= {() => toggleTab(4) }>
                        View More
                        <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>
                    <div className= {toggleState === 4 ? "services-modal active-modal" : "services-modal" }>

                        <div className="services-modal-content">
                            <i className="uil uil-times services-modal-close" onClick= {() => toggleTab(0)}></i>
                            <h3 className="services-modal-title">Database Designer</h3>
                            <p className="services-modal-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quisquam voluptatum soluta facilis maiores? Temporibus accusantium corrupti commodi possimus, itaque quia id, incidunt animi dolorum consequatur quasi eos quibusdam repellendus!</p>
                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
