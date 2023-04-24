import { Link } from "react-router-dom";
import { useState } from 'react'
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import base from "../../api/base"
import MenuProject from "./MenuProjects/MenuProject";
import MenuFilter from "./MenuFilter/MenuFilter";
import { ReactComponent as SVGClock } from '../../assets/clock.svg';
import { ReactComponent as SVGFolders } from '../../assets/folders.svg';
import { ReactComponent as SVGBin } from '../../assets/bin.svg';
import './Menu.css';

const Menu = () => {
  const [projects, setProjects] = useState([]);
  const [editors, setEditors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState("Recent");
  const dataFetchedRef = useRef(false);
  const [searchParams, setSearchParams] = useSearchParams({});


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
      setLoaded(true);
    })
    dataFetchedRef.current = true;
  }, []);

  const changeFilter = event => {
    setFilter(event.target.value);
    setSearchParams({ "filter": event.target.value });
    console.log(event.target.value);
  }

  return (
    <>
      <nav>
        <strong> <Link to="./">Home</Link></strong>
        <hr />
        <div>
          <MenuFilter 
            title="Recent" 
            name="menu-filter" 
            onChange={changeFilter}
            checked={filter === "Recent"}
          >
            <SVGClock />
          </MenuFilter> 
          <MenuFilter 
            title="Archived" 
            name="menu-filter" 
            onChange={changeFilter}
            checked={filter === "Archived"}
          >
            <SVGFolders />
          </MenuFilter> 
          <MenuFilter 
            title="Deleted" 
            name="menu-filter" 
            onChange={changeFilter}
            checked={filter === "Deleted"}
          >
            <SVGBin />
          </MenuFilter> 
        </div>
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