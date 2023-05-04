import Tag from "../Tag/Tag";
import "./PanelItem.css"

const PanelItem = ({title, date, resume, isActive, onClick}) => {

    const tags = ["Communisme", "Michea"];
    const tagsColors = ["tag-blue", "tag-green"];

    return (
        <li role="button" className={`panel-item ${isActive ? "active" : ""}`} onClick={onClick}>
            <div className="panel-item-tags">
                {tags.map((tag, index) =>
                    <Tag 
                        key={index}
                        title={tag}
                        color={tagsColors[index]}
                    />
                )}
            </div>
            <div className="panel-item-title">
            <span>{title}</span>
            <span className="panel-item-date">{date}</span>
            </div>
            <div className="panel-item-content">{resume}</div>
        </li>
    )
};

export default PanelItem;