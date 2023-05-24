import { Link } from "react-router-dom";
import MenuSettings from '../MenuSettings/MenuStettings';
import './MenuEditor.css';

const MenuEditor = ({editor}) => {
    return (
        <Link to={"./dynamic/"+editor.id} key={editor.id}>
            <li 
            className="project-editor-item" 
            >
            <div className="project-editor-ico"></div>
            <span>{editor.fields.Name}</span>
            <MenuSettings 
                clickRename={() => console.log("rename editor")}
                clickDelete={() => console.log("delete editor")}
            />
            </li>
      </Link>
    )
};

export default MenuEditor;