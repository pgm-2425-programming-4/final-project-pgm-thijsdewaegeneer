import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
        <section className='about'>

          <div className='about__content'>
          <h2 className='about__title'>Over dit project</h2> <br />
            <p className='about__context'>
              Dit project is ontwikkeld in het kader van een opdracht aan Arteveldehogeschool. Het doel is om mijn vaardigheden in webontwikkeling, ontwerp en/of contentcreatie te demonstreren door een praktische toepassing te bouwen. Tijdens het project heb ik aandacht besteed aan gebruiksvriendelijkheid, responsief design en technische kwaliteit. Het resultaat is een functionele en toegankelijke webapplicatie die inspeelt op een specifieke behoefte of doelgroep.
            </p>
          </div>

          <div className='about__content'>
            <h2 className='about__title'>Contact</h2>
            
              <p className='about__context'>
                Naam: Thijs De Waegeneer <br />
                E-mail: [jouw.studentnummer]@student.arteveldehs.be <br />
                LinkedIn: 
              </p>
          </div>
        </section>
    </>
)
}
