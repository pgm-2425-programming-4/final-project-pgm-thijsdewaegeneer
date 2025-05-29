import TaskCard from "./TaskCard";

function TaskColumn({ title, tasks }) {
  return (
    <div className="task-column">
      <h2 className="task-column__title">{title}</h2>
      <ul className="task-column__list">
        {tasks.map((task, index) => (
          <li key={index} className="task-column__list-item">
            <h3 className="list-item__title">{task.title}</h3>
            <p className="list-item__description">{task.description}</p>
            <div className="list-item__categories">
              <ul className="list-item__category-list">
                {task.categories.map((category, catIndex) => (
                  <li key={catIndex} className="list-item__category-item">
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskColumn;