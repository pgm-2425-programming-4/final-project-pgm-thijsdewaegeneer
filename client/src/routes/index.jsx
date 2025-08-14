import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {

  return (
  <main className='main'>
    <h2 className='main__title'>
      Hello, welcome to my kanban board made in React
    </h2>
    <p className='main__subtitle'>
      Click "about" for practical information or any of the already existing projects to take a look at what it is about.
    </p>
  </main>
)
}
