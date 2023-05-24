import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import './MenuSettings.css';

const MenuSettings = ({clickRename, clickDelete, stopPropagation, preventDefault}) => {  
  const [isOpen, setIsOpen] = useState(false);
  const refBt = useRef(null);
  const toggleOpen = (event) => {
      if(stopPropagation) event.stopPropagation();
      if(preventDefault) event.preventDefault();
      setIsOpen(!isOpen);
  }

  const handleClickOutside = (event) => {
    if (refBt.current && !refBt.current.contains(event.target)) {
        setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
        document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
      <div ref={refBt} className="menu-settings" onClick={(event) => toggleOpen(event)} >
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