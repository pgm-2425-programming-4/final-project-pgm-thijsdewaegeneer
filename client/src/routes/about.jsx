import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return( 
    <main className='main'>
      <h2 className='main__title'>
        What this project is about
      </h2>
      <p className='main__subtitle'>
        This is my final project for PGM4
      </p>
      <p className='main__subtitle'>
        It is a taskboard built in React to showcase what I have learned throughout the year.
      </p>
      <p className='main__subtitle'>
        The application allows you to create, view, and manage tasks across multiple projects. You can organize tasks by status, assign them to categories, and track progress visually.
      </p>
      <p className='main__subtitle'>
        Technologies used include React, Vite, Strapi (for the backend API), and TanStack Router for navigation. The project demonstrates skills in component-based architecture, state management, API integration, and responsive design.
      </p>
      <p className='main__subtitle'>
        Thank you for visiting and exploring my work!
      </p>
    </main>
  )
}
