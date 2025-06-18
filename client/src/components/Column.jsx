import { useQuery } from "@tanstack/react-query";
import { fetchStatus } from "../api/categories/FetchCategory";
import { fetchTask } from "../api/tasks/FetchTask";
import TaskList from "./TaskList";
import React from "react";

function Column({ projectId }) {
  const { data: statusesData } = useQuery({ 
    queryKey: ['statuses'], 
    queryFn: fetchStatus 
  });

  const { data: tasksData } = useQuery({
    queryKey: ['tasks'], 
    queryFn: fetchTask 
  });
  
  const tasks = tasksData?.data || [];

  const tasksInProject = tasks.filter(task => task.project?.documentId === projectId);

  return (
    <>
      {statusesData?.data
        ?.filter((status) => status.StatusType !== "Backlog")
        .map(status => {
          const tasksInStatus = tasksInProject.filter(task => task.Task?.StatusType === status.StatusType);
          return (
            <div key={status.id} className="board__list-wrapper">
              <h2 className="board__list-title">{status.StatusType}</h2>
              <TaskList tasks={tasksInStatus} statusId={status.id} />
            </div>
          );
        })}
    </>
  );
}

export default Column;