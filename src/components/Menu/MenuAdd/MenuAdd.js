import { ReactComponent as SVGPlus } from '../../../assets/plus.svg';
import './MenuAdd.css';

const MenuAdd = ({editor, text}) => {
    return (
        <div className='menu-add'>
            <SVGPlus />
            <span>{text}</span>
        </div>
    )
};

export default MenuAdd;