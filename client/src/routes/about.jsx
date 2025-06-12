import { createFileRoute } from '@tanstack/react-router'
import Navigation from '../components/Navigation'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
        <Navigation/>
        <div>
            <h2>Over dit project</h2> <br />
            <p>
            Dit project is ontwikkeld in het kader van een opdracht aan Arteveldehogeschool. Het doel is om mijn vaardigheden in webontwikkeling, ontwerp en/of contentcreatie te demonstreren door een praktische toepassing te bouwen. Tijdens het project heb ik aandacht besteed aan gebruiksvriendelijkheid, responsief design en technische kwaliteit. Het resultaat is een functionele en toegankelijke webapplicatie die inspeelt op een specifieke behoefte of doelgroep.
            </p> <br />

            <p>
            <h2>Contact</h2>
            Naam: Thijs De Waegeneer <br />
            E-mail: [jouw.studentnummer]@student.arteveldehs.be <br />
            LinkedIn: 
            </p>
        </div>
    </>
)
}
