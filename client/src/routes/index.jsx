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
        Hallo en welkom op deze app, gemaakt door Thijs
      </div>
    </>
  )
}
