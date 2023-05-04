import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from 'react';
import renameProject from "../../../api/renameProject";
import deleteProject from "../../../api/deleteProject";
import MenuAdd from "../MenuAdd/MenuAdd";
import MenuSettings from "../MenuSettings/MenuStettings";
import srcIcoTriangle from '../../../assets/triangle.svg'
import './MenuProject.css';

const MenuProject = ({idRecord, name, listEditors, classColor, isOpen = false, deleteRecord}) => {
  const [isActive, setIsActive] = useState(isOpen);
  const [isFocus, setIsFocus] = useState(false);
  const refTitle = useRef(null);

  const handleRename = () => {
    setIsFocus(true);
    refTitle.current.readOnly = false;
    refTitle.current.focus();
  }

  const handleFocusOut = () => {
    setIsFocus(false);
    refTitle.current.readOnly = true;
    console.log(refTitle.current.value, idRecord);
    renameProject(idRecord, refTitle.current.value);
  }

  const handleDelete = () => {
    deleteProject(idRecord, () => {
      deleteRecord();
    });
  }
  
  return (
    <div className={`project ${classColor} ${isActive ? "open" : ""}`}>
      <img className="project-trangle" src={srcIcoTriangle} alt="open icon"/>
      <div className="project-header" onClick={() => setIsActive(!isActive)}>
        <div className="project-header-ico"></div>
        <div className="project-header-content">
          <input 
            ref={refTitle} 
            className={`project-title ${isFocus ? "" : "mode-readonly"}`} 
            type="text" defaultValue={name} 
            readOnly
            onBlur={() => handleFocusOut()}
          />
          <span className="project-header-docs">{listEditors.length} documents</span>
        </div>
        <MenuSettings 
          clickRename={handleRename}
          clickDelete={handleDelete}
        />
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