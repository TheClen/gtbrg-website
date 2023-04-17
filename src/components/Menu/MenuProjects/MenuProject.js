import { Link } from "react-router-dom";

const MenuProject = ({name, listEditors}) => {
  return (
    <>
      <strong>{name}</strong>
      <ul>
        {listEditors.map((editor) =>
          <li key={editor.id}>
            <Link to={"./dynamic/"+editor.id}>{editor.fields.Name}</Link>
          </li>
        )}
      </ul>
    </>
  )
};

export default MenuProject;