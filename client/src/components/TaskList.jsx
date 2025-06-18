function TaskList({ tasks }) {
  if (!tasks) {
    return <span>Loading...</span>;
  }

  if (tasks.length === 0) {
    return <span>No tasks</span>;
  }

  return (
    <ul className="board__list">
      {tasks.map(task => (
        <li key={task.id} className="board__list-item">
          <div className="card">
            <h3 className="card__title">{task.Title}</h3>
            <p className="card__context">
              {Array.isArray(task.Description)
                ? task.Description[0]?.children[0]?.text || "No description"
                : "No description"}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;