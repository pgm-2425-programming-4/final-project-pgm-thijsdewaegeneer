import {useQuery} from "@tanstack/react-query";
import { fetchStatus } from "../api/categories/FetchCategory";
import TaskList from "./TaskList";
import React from "react";

function Column () {
    const { isPending, isError, data, error } = useQuery({ 
    queryKey: ['statuses'], 
    queryFn: fetchStatus
    });

    if(isPending) {
        return <span>Loading...</span>
    }
    if(isError) {
        return <span>Error: {error.message}</span>
    }
    console.log("Column succesfully loaded in")

    return (
    <>

      {data.data
      .filter(status => status.StatusType !== "Backlog")
      .map((status) => (
        <div key={status.id} className="board__list-wrapper">
          <h2 className="board__list-title">{status.StatusType}</h2>
          < TaskList />
        </div>
      ))
      }

    </>
        
    )
}

export default Column