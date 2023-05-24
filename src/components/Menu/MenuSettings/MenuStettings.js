import { useState } from "react";
import './MenuSettings.css';

const MenuSettings = ({clickRename, clickDelete, stopPropagation}) => {  
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = (event) => {
        if(stopPropagation) event.stopPropagation();
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
                    <li className='menu-settings-row' onClick={clickDelete}>Delete</li>
                </ul>
            </div>
          )}
        </div>
  )
};

export default MenuSettings;