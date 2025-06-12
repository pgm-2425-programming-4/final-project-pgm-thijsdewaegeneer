import { createFileRoute, Outlet } from '@tanstack/react-router'
import Navigation from "../components/Navigation.jsx"

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
        <Navigation />
        <div>
          <h2>Hallo en welkom op deze app, gemaakt door Thijs</h2>
        </div>
    </>
  )
}
