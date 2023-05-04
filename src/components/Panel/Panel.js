import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import PanelItem from "./PanelItem/PanelItem";
import "./Panel.css"

const Panel = () => {
  const [itemActive, setItemActive] = useState(0);

  return (
    <div className="panel">
      <SearchBar/>
      <ul className="panel-list">
        <PanelItem 
          title="Le loup dans la bergerie"
          date="03/03/23"
          resume="Ut quis quam ante. Nunc vel semper diam. Aenean interdum, orci ut vulputate gravida"
          isActive={itemActive === 0}
          onClick={() => setItemActive(0)}
        />
        <PanelItem 
          title="L'empire du moindre mal"
          date="03/03/23"
          resume="Ut quis quam ante. Nunc vel semper diam. Aenean interdum, orci ut vulputate gravida"
          isActive={itemActive === 1}
          onClick={() => setItemActive(1)}
        />
        <PanelItem 
          title="Le plus beau but était une passe"
          date="03/03/23"
          resume="Ut quis quam ante. Nunc vel semper diam. Aenean interdum, orci ut vulputate gravida"
          isActive={itemActive === 2}
          onClick={() => setItemActive(2)}
        />
      </ul>
    </div>
  )
};

export default Panel;