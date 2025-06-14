import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Navigation from '../components/Navigation'
import "../styles/base/main.css"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <header>
        <Navigation />
      </header>

      <main>
        <Outlet />
      </main>

    </React.Fragment>
  )
}
