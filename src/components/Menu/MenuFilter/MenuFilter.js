import './MenuFilter.css';

const MenuFilter = ({title, name, children, onChange, checked}) => {
    return (
        <label htmlFor={title} className={`menu-filter ${checked && "active"}`}>
            <input 
                type="radio" 
                id={title} 
                name={name} 
                value={title}
                onChange={onChange}
                checked={checked}
            />
            {children}
            <span>{title}</span>
        </label>
    )
};

export default MenuFilter;