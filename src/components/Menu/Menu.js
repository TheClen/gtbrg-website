import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef } from 'react'
import base from "../../api/base"
import MenuProject from "./MenuProject/MenuProject";
import MenuFilter from "./MenuFilter/MenuFilter";
import MenuAdd from "./MenuAdd/MenuAdd";
import { ReactComponent as SVGClock } from '../../assets/clock.svg';
import { ReactComponent as SVGFolders } from '../../assets/folders.svg';
import { ReactComponent as SVGBin } from '../../assets/bin.svg';
import srcLogo from '../../assets/logo.svg'
import './Menu.css';

const Menu = () => {
  const [projects, setProjects] = useState([]);
  const [editors, setEditors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState("Recent");
  const dataFetchedRef = useRef(false);
  const [searchParams, setSearchParams] = useSearchParams({});
  const projectClassColors = [
    "project-red", "project-blue",
  ]

  useEffect(() =>{
    if (dataFetchedRef.current) return;
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
    setSearchParams({ "filter`": event.target.value });
    console.log(searchParams)
  }

  return (
    <>
      <nav>
        <Link to="./"><img className="menu-logo" src={srcLogo} alt="Gutenberg logo"/></Link>
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
        {loaded === true && 
        <>
          {projects.map((project, index) =>
            <MenuProject 
              key={index}
              idRecord={project.id}
              isOpen={index === 0}
              classColor={projectClassColors[index % projectClassColors.length]}
              name={project.fields.Name}
              listEditors={editors.filter(editor => editor.fields.ProjectId[0] === project.id)}
            />
          )}
        </> }
        <MenuAdd text="Create a new project" />
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