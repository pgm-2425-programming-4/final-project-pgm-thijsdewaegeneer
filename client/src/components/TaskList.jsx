import {useQuery} from "@tanstack/react-query";
import { fetchTask } from "../api/tasks/FetchTask"

function TaskList() {

  
    const { isPending, isError, data, error } = useQuery({ 
    queryKey: ['tasks'], 
    queryFn: fetchTask
    });

    if(isPending) {
    return <span>Loading...</span>
    }

    if(isError) {
    return <span>Error: {error.message}</span>
    }
    console.log("Tasklist succesfully loaded in")

    return (
      <>
        {data.data
        .map((task) => (
            <ul key={task.id} className="board__list">
              <li className="board__list-item">
                <div className="card">
                  <h3 className="card__title">{task.title}</h3>
                  <p className="card__context">{task.description}</p>
                </div>
              </li>
            </ul>
        ))
        }
      </>
    )
}


export default TaskList