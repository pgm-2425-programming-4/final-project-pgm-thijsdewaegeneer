import { useQuery } from "@tanstack/react-query";
import { fetchTask } from "../api/tasks/FetchTask";

function TaskList({ statusName }) {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTask
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // Safely filter tasks only if data and data.data exist
  const filteredTasks = data?.data
    ? data.data.filter(
        task =>
          task.attributes?.status?.data?.attributes?.name === statusName
      )
    : [];

  return (
<ul className="board__list">
  {filteredTasks.map((task) => (
    <li key={task.documentId} className="board__list-item">
      <div className="card">
        <h3 className="card__title">{task.Title}</h3>
        <p className="card__context">{}</p>
      </div>
    </li>
  ))}
</ul>
  );
}

export default TaskList;