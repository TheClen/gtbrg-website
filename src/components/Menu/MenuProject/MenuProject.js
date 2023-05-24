import { useState } from "react";
import { useRef } from 'react';
import renameProject from "../../../api/renameProject";
import deleteProject from "../../../api/deleteProject";
import createEditor from "../../../api/createEditor"
import MenuEditor from "../MenuEditor/MenuEditor";
import MenuAdd from "../MenuAdd/MenuAdd";
import MenuSettings from "../MenuSettings/MenuStettings";
import srcIcoTriangle from '../../../assets/triangle.svg'
import './MenuProject.css';

const MenuProject = ({idRecord, name, listEditors, classColor, isOpen = false, onContentChange}) => {
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
      onContentChange();
    });
  }

  const handleDeleteEditor = () => {
    onContentChange();
  }

  const addEditor = () =>{
    createEditor(idRecord);
    onContentChange();
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
          stopPropagation
        />
      </div> 
      {isActive && 
        <ul className="project-editors">
        {listEditors.map((editor) =>
          <MenuEditor 
            editor={editor} 
            key={editor.id} 
            onDeleteEditor={handleDeleteEditor}/>
        )}
          <li key="item-add" className="editor-add">
            <MenuAdd text="Create a new editor" clickAdd={() => addEditor()}/>
          </li>
        </ul>
      }
    </div>
  )
};

export default MenuProject;