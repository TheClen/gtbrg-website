import './MenuEditor.css';

const MenuEditor = ({editor}) => {
    return (
        <li className="project-editors-item">
            <Link to={"./dynamic/"+editor.id}>{editor.fields.Name}</Link>
        </li>
    )
};

export default MenuEditor;