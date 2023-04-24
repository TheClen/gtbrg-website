import {useState, useRef} from 'react'
import { useEffect } from "react";
import base from "../../api/base"
import './Editor.css'

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

    const setTextAreaHeight = () => {
        textareaRef.current.style.height = (textareaRef.current.scrollHeight - 40) + "px";
    }

    const handleSave = () => {
        console.log(id, content);        
        base('Editors').update([
          {
            "id": id,
            "fields": {
              "Content": content,
            }
          },
        ], function(err, records) {
          if (err) {
            console.error(err);
            return;
          }
          records.forEach(function(record) {
            console.log(record.get('Editors'));
          });
        });
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
            <button onClick={handleSave}>Save</button>
        </div> 
    );
};
  
export default Editor;