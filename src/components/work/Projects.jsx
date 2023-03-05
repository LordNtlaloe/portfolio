import { projectsData } from "./Data";
import { projectsNavigation } from "./Data";
import ProjectItems from "./ProjectItems";

export default function Projects() {
    return(
        <div className="">
            <div className="work-filters">
                {projectsNavigation.map((item, index) =>{
                    return(
                        <span className="work-item" key={index}>{item.name}</span>
                    )
                })}
            </div>
            <div className="work-container container grid">
                {projectsData.map((item) => {
                    return <ProjectItems item={item} key={item.id}/>
                })}
            </div>
        </div>
    )
}