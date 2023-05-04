import { ReactComponent as SVGPlus } from '../../../assets/plus.svg';
import './MenuAdd.css';

const MenuAdd = ({editor, text, clickAdd}) => {
    return (
        <div className='menu-add' onClick={clickAdd}>
            <SVGPlus />
            <span>{text}</span>
        </div>
    )
};

export default MenuAdd;