function TaskCard({ title, description, categories }) {
    
  return (
    <li className="task-column__list-item">
      <h3 className="list-item__title">{title}</h3>
      <p className="list-item__description">{description}</p>
      <div className="list-item__categories">
        <ul className="list-item__category-list">
          {categories.map((category, index) => (
            <li key={index} className="list-item__category-item">
              {category}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default TaskCard;