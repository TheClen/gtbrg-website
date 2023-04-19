import {useState, useRef} from 'react'
import { useEffect } from "react";
import Airtable from "airtable";
import './Editor.css'

const base = new Airtable({apiKey: "patiZ5Pu9lB8MlJaO.a55b018c2d8b62b442556f027fd92d4eece8d2a0b8845f258a83c452154910e2"}).base('appgS4x2H73CPlv7j');

const Editor = ({id}) => {
    const [content, setContent] = useState("");
    useEffect(() =>{
        base('Editors').find(id, function(err, record) {
            if (err) { console.error(err); return; }
            console.log('Retrieved', record.id);
            setContent(record.fields.Content)
            setTextAreaHeight()
        });
    },[id])

    const textareaRef = useRef(null);

    const handleChange = (event) =>{
        setContent(event.target.value);
        setTextAreaHeight()
        
    }

    const setTextAreaHeight = () =>{
        textareaRef.current.style.height = (textareaRef.current.scrollHeight - 40) + "px";
    }

    return (
        <div>
            <h1>Editor</h1>
            <p>The number id is 👉️ {id}</p>
            <textarea
                onChange={handleChange}
                value={content} 
                ref={textareaRef}
            >
            </textarea>
            
        </div> 
    );
};
  
export default Editor;