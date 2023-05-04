import { useState } from "react";
import './MenuSettings.css';

const MenuSettings = ({clickRename}) => {  
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = (event) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    }

  return (
        <div className="menu-settings" onClick={(event) => toggleOpen(event)}>
          <div className="menu-settings-dot"></div>
          <div className="menu-settings-dot"></div>
          <div className="menu-settings-dot"></div>
          {isOpen && (
            <div className='menu-settings-panel'>
                <ul>
                    <li className='menu-settings-row' onClick={clickRename}>Rename</li>
                    <li className='menu-settings-row'>Delete</li>
                </ul>
            </div>
          )}
        </div>
  )
};

export default MenuSettings;