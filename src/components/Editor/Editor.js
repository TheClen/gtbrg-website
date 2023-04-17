import {useState} from 'react'
import { useEffect } from "react";
import Airtable from "airtable";

const base = new Airtable({apiKey: "patiZ5Pu9lB8MlJaO.a55b018c2d8b62b442556f027fd92d4eece8d2a0b8845f258a83c452154910e2"}).base('appgS4x2H73CPlv7j');

const Editor = ({id}) => {
    const [content, setContent] = useState("");
    useEffect(() =>{
        base('Editors').find(id, function(err, record) {
            if (err) { console.error(err); return; }
            console.log('Retrieved', record.id);
            setContent(record.fields.Content)
        });
    },[id])

    return (
        <div>
            <h1>Editor</h1>
            <p>The number id is 👉️ {id}</p>
            <p>{content}</p>
        </div> 
    );
};
  
export default Editor;