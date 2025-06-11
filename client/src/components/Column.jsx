import {useQuery} from "@tanstack/react-query";
import { fetchStatus } from "../api/categories/FetchCategory";
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
          <ul className="board__list">
            <li className="board__list-item">
              <div className="card">
                <h3 className="card__title">Dummy text</h3>
                <p className="card__context">Dummy text</p>
              </div>
            </li>
          </ul>
        </div>
      ))
      }

    </>
        
    )
}

export default Column