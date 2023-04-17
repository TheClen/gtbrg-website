import { useParams } from 'react-router-dom';
import Editor from '../../components/Editor/Editor';

const Dynamic = () => {
  const params = useParams();
  return (
    <Editor id={params.id}/>
  );
};
  
export default Dynamic;