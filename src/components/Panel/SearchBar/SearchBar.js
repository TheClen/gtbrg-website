import srcGlassIco from '../../../assets/magn-glass.svg'
import srcFiltersIco from '../../../assets/board.svg'
import './SearchBar.css';

const SearchBar = () => {
    return (
        <label htmlFor='searchbar-input' className='searchbar'>
            <img className="searchbar-ico searchbar-glass" src={srcGlassIco} alt="search icon" />
            <input id="searchbar-input" placeholder="documents, resources,..." type="text" />
            <img className="searchbar-ico searchbar-filters" src={srcFiltersIco} alt="filters icon" />
        </label>
    )
};

export default SearchBar;