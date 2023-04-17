import { useParams } from 'react-router-dom';
import logo from "../../assets/logo.svg"

const Dynamic = () => {
  const params = useParams();
  return (
    <div>
      <h1>Dynamic page</h1>
      <p>The number id is 👉️ {params.id}</p>
      <img src={logo} className="App-logo" alt="logo" />
    </div> 
  );
};
  
export default Dynamic;