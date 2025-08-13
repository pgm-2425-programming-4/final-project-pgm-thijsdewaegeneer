import * as React from "react";
import { createRootRoute, Outlet, Link } from '@tanstack/react-router';
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useQuery } from "@tanstack/react-query";


export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {

    return (
        <>
        <navigation className="nav">
            <ul className="nav__list">
                {/* loop here with data.map */}
            </ul>
        </navigation>

        < Outlet />
        < TanStackRouterDevtools />
        </>
    )
}