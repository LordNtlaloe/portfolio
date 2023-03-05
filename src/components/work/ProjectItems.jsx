export default function ProjectItems({item}){
    return (
        <div className="work-card" key={item.id}>
            <img src={item.image} alt="" className="work-image"/>
            <h3 className="work-title">{item.title}</h3>
            <a href={item.link} className="work-button">
                Preview <i className="bx bx-right-arrow-alt work-button-icon"></i>
            </a>
        </div>
    )
}