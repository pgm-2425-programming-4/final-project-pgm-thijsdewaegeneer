import TaskColumn from "./TaskColumn";
import { useEffect, useState} from "react";
import { API_TOKEN, API_URL } from "../constants/constants";

function TaskBoard () {
    const tasks = [
    {
      title: 'Shake it, shake it',
      description: 'Shake it, shake it hake it, shake it hake it, shake it',
      categories: ['Back-end', 'Front-end'],
    },
  ];

  return (
    <div className="task-board">
      <TaskColumn title="To Do" tasks={tasks} />
      <TaskColumn title="In Progress" tasks={tasks} />
      <TaskColumn title="Done" tasks={tasks} />
    </div>
  );
}


export default TaskBoard