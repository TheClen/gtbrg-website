import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import renameEditor from "../../../api/renameEditor";
import deleteEditor from "../../../api/deleteEditor";
import MenuSettings from '../MenuSettings/MenuStettings';
import './MenuEditor.css';

const MenuEditor = ({editor, onDeleteEditor}) => {
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
        console.log(refTitle.current.value, editor.id);
        renameEditor(editor.id, refTitle.current.value);
    }

    const handleDelete = () => {
        deleteEditor(editor.id, () => {
            onDeleteEditor();
        });
      }

    return (
        <Link to={"./dynamic/"+editor.id}>
            <li 
            className="project-editor-item" 
            >
            <div className="editor-ico"></div>
            {/* <span>{editor.fields.Name}</span> */}
            <input 
                ref={refTitle} 
                className={`editor-title ${isFocus ? "" : "mode-readonly"}`} 
                type="text" 
                defaultValue={editor.fields.Name} 
                readOnly
                onBlur={() => handleFocusOut()}
          />
            <MenuSettings 
                clickRename={handleRename}
                clickDelete={handleDelete}
                preventDefault
            />
            </li>
      </Link>
    )
};

export default MenuEditor;