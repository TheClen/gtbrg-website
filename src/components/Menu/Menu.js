import { Link } from "react-router-dom";
import './Menu.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to="./editor">Editor</Link>
          </li>
          <li>
            <Link to="./contact">Contact tests</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Layout;