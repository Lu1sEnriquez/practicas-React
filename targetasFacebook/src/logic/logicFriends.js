import data from "../data"


export const friendsGet =()=>{
    return data.map(person =>{
        return person.isFriend == true&& person.id
    } )
}
export const commonFriends = (friends, compareFriends)=>{
    let contador = 0;
    friends.forEach(id => compareFriends.includes(id)&& contador++ )
    return contador
}