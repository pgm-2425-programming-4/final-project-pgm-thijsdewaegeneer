import { createFileRoute} from '@tanstack/react-router'
import { useParams } from '@tanstack/react-router'
import Searcher from "../../components/Searcher"
import Board from "../../components/Board"

export const Route = createFileRoute('/projects/$projectId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { projectId } = useParams({
    from: '/projects/$projectId'
  })

  return (

    <>
      <Searcher projectId={projectId} />
      <Board projectId={projectId} />
    </>
  )
}
