import "./Tag.css"

const Tag = ({title, color}) => {
  return (
    <span className={`tag ${color}`}>{title}</span>
  )
};

export default Tag;