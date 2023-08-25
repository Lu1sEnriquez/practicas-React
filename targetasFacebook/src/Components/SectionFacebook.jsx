
import data from '../data'
import {ButtonCard} from './ButtonCard'

import { SugerenciasCard } from './SugerenciaCard'
export const SectionFacebook = ({type})=>{
    
    return(
       <div className="section-facebook">
        <header >
            <h1>Solicitudes De Amistad</h1>
            <ButtonCard typeButton={'tresPuntos'}/>
        </header>
         <section className='container-sugerenciasFriends'>
          {
            data.map((person, index)=>{
                
                return(
                    
                    <SugerenciasCard
                        key={person.id}
                        img={person.img??'https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg'}
                        name = {person.name}
                        friends={person.friends}
                        isFriend={person.isFriend}
                    />
                )
            })
          }
        </section>
        <div className="section-facebook-button">
            <ButtonCard typeButton={'delante'} contenido={'container-sugerenciasFriends'}/>
            <ButtonCard typeButton={'atras'} contenido={'container-sugerenciasFriends'}/>

        </div>
        <footer>
            <ButtonCard
            typeButton={'verMas'}
            />
        </footer>
       </div>
    )
}