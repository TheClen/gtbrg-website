import { Link } from "react-router-dom";
import MenuProject from "./MenuProjects/MenuProject";
import './Menu.css';

const Menu = ({projects, editors}) => {
  //console.log(projects, editors)
  //console.log( projects[0])
  return (
    <>
      <nav>
        {projects.map((project) =>
          <MenuProject 
            key={project.id} 
            name={project.fields.Name}
            listEditors={editors.filter(editor => editor.fields.ProjectId[0] === project.id)}
          />
        )}
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