import data from "../data";
import { commonFriends, friendsGet } from "../logic/logicFriends";
import { ButtonCard } from "./ButtonCard";



export const SugerenciasCard = ({ id, img, name, friends, isFriend }) => {
   
    const lastFriendId = friends[friends.length - 1];
    
    
    const lastFriendObject =  data.find( person => person.id == lastFriendId)
    
    const imgLastFriend = lastFriendObject?.img ?? 'https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg'
   
   const contador =commonFriends(friendsGet(), friends)
    return (
        <div className="person-card">
            <div className="container-img">
                <img src={img} alt="" />
            </div>
            <div className="container-info">
                <h4>{name}</h4>
                <div className="friendCommon-container">
                    <div className="friend-img">
                    <img src={imgLastFriend} alt="img"/>
                    </div>
                    <p>{`${contador} amigos en común`}</p>
                </div>
            </div>
            <div className="container-buttons">
                <ButtonCard typeButton={'agregar' }><svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xxk0z11 xvy4d1p"><path d="M9.209 5.207 16 12l-6.791 6.793a1 1 0 1 0 1.415 1.414l7.5-7.5a1 1 0 0 0 0-1.414l-7.5-7.5a1 1 0 1 0-1.415 1.414z"></path></svg>
                </ButtonCard>
                <ButtonCard typeButton={'eliminar'}/>
            </div>

        </div>
    )
}