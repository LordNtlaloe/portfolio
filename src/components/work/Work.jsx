import "./work.css";
import Projects from "./Projects";

export default function Work() {
    return(
        <section className="section work">
            <h2 className="section-title">Portfolio</h2>
            <span className="section-subtitle">My Work</span>
            <Projects />
        </section>
    )
}