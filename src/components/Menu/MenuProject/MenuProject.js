import { Link } from "react-router-dom";
import './MenuProject.css';

const MenuProject = ({name, listEditors, classColor}) => {
  return (
    <div className={`project ${classColor}`}>
      <div className="project-header">
        <div className="project-header-ico"></div>
        <div className="project-header-content">
          <strong>{name}</strong>
          <span class="project-header-docs">{listEditors.length} documents</span>
        </div>
        <div className="project-header-params">
          <div className="project-header-bullet"></div>
          <div className="project-header-bullet"></div>
          <div className="project-header-bullet"></div>
        </div>
      </div> 
      <ul>
        {listEditors.map((editor) =>
          <li key={editor.id}>
            <Link to={"./dynamic/"+editor.id}>{editor.fields.Name}</Link>
          </li>
        )}
        <li><button>Add Editor</button></li>
      </ul>
    </div>
  )
};

export default MenuProject;