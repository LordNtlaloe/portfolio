import { projectsData } from "./Data";
import { projectsNavigation } from "./Data";
import {useState, useEffect} from "react";
import ProjectItems from "./ProjectItems";
import "./work.css";

export default function Projects() {
    const [item, setItem] = useState({title: 'All'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.title === 'All') {
            setProjects(projectsData);
        }
        else{
            const newProjects = projectsData.filter((project) => {
                return project.category === item.title;
            });
            setProjects(newProjects);
        }
    }, [item]);
    const handleClick = (e, index) => {
        setItem({title: e.target.textContent });
        setActive(index);
    }
    return(
        <div className="">
            <div className="work-filters">
                {projectsNavigation.map((item, index) =>{
                    return(
                        <span onClick={(e) => { 
                            handleClick(e, index);
                        }} className={`${active === index ? "active-work" : ""} work-item`} key={index}>{item.title}</span>
                    )
                })}
            </div>
            <div className="work-container container grid">
                {projects.map((item) => {
                    return <ProjectItems item={item} key={item.id}/>
                })}
            </div>
        </div>
    )
}