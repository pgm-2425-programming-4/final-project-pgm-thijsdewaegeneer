import * as React from "react";
import { createRootRoute, Outlet, Link } from '@tanstack/react-router';
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../queries/fetchProjects"


export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    const { data } = useQuery({
        queryKey: ['projects'],
        queryFn: fetchProjects,
    })
    return (
        <>
        <nav className="nav">
            <h2 className="nav__title">
                PROJECTS
            </h2>

            <div className="nav__pages">
                <Link to="/" className="nav__pages-link">
                    Home
                </Link>

                <Link to="/about" className="nav__pages-link">
                    About
                </Link>
            </div>
            
            <ul className="nav__list">
                {data?.data.map(project => (
                    <li key={project.id} className="nav__list-item"> 
                    <Link to={`/projects/${project.documentId}`} className="nav__list-link">
                    {project.Title}
                    </Link >
                    </li>
                ))}
            </ul>
        </nav>

        < Outlet />
        < TanStackRouterDevtools />
        </>
    )
}