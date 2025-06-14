import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h2>Hallo en welkom op deze app, gemaakt door Thijs</h2>
    </>
  )
}
