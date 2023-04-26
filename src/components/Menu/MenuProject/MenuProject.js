import { Link } from "react-router-dom";
import { useState } from "react";
import MenuAdd from "../MenuAdd/MenuAdd";
import './MenuProject.css';

const MenuProject = ({name, listEditors, classColor, isOpen = false}) => {
  const [isActive, setIsActive] = useState(isOpen);
  
  return (
    <div className={`project ${classColor}`}>
      <div className="project-header" onClick={() => setIsActive(!isActive)}>
        <div className="project-header-ico"></div>
        <div className="project-header-content">
          <strong>{name}</strong>
          <span className="project-header-docs">{listEditors.length} documents</span>
        </div>
        <div className="project-header-params">
          <div className="project-header-bullet"></div>
          <div className="project-header-bullet"></div>
          <div className="project-header-bullet"></div>
        </div>
      </div> 
      {isActive && 
        <ul className="project-editors">
        {listEditors.map((editor) =>
          <Link to={"./dynamic/"+editor.id} key={editor.id}>
            <li 
              className="project-editor-item" 
            >
              <div className="project-editor-ico"></div>
              <span>{editor.fields.Name}</span>
            </li>
          </Link>
        )}
          <li key="item-add" className="project-editor-item">
            <MenuAdd text="Create a new editor" />
          </li>
        </ul>
      }
    </div>
  )
};

export default MenuProject;