import { Link } from "react-router-dom";

const MenuProject = ({name, listEditors}) => {
  return (
    <>
      <b>{name}</b>
      <ul>
        {listEditors.map((editor) =>
          <li key={editor.id}>
            <Link to={"./dynamic/"+editor.id}>{editor.fields.Name}</Link>
          </li>
        )}
        <li><button>Add Editor</button></li>
      </ul>
    </>
  )
};

export default MenuProject;