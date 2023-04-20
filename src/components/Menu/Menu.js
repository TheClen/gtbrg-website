import { Link } from "react-router-dom";
import { useState } from 'react'
import { useEffect, useRef } from "react";
import base from "../../api/base"
import MenuProject from "./MenuProjects/MenuProject";
import './Menu.css';

const Menu = () => {
  const [projects, setProjects] = useState([]);
  const [editors, setEditors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const dataFetchedRef = useRef(false);

  useEffect(() =>{
    if (dataFetchedRef.current) return;
    console.log("useeffect")
    base("projects")
      .select({view: "Grid view"})
      .eachPage((records, fetchNextPage) => {
        setProjects(records);
        fetchNextPage();
      })
    base("editors")
    .select({view: "Grid view"})
    .eachPage((records, fetchNextPage) => {
      setEditors(records);
      fetchNextPage();
      setLoaded(true)
    })
    dataFetchedRef.current = true;
  }, []);

  return (
    <>
      <nav>
      <strong> <Link to="./">Home</Link></strong>
      <hr />
      {loaded === true && 
      <>
        {projects.map((project) =>
          <MenuProject 
            key={project.id} 
            name={project.fields.Name}
            listEditors={editors.filter(editor => editor.fields.ProjectId[0] === project.id)}
          />
        )}
      </> }
        {/* {editors.map((editor) =>
          <span key={editor.id}>
            {editor.fields.Name}
          </span>
        )} */}
        {/* <ul>
          <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to="./editor">Editor</Link>
          </li>
          <li>
            <Link to="./dynamic/2">Dynamic</Link>
          </li>
          <li>
            <Link to="./contact">Contact</Link>
          </li>
        </ul> */}
      </nav>
    </>
  )
};

export default Menu;