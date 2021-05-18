export const getAvatars = async () => { 

    const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=Water+Tribe');
    const avatars = await res.json() 

    return avatars.map((avatar) => {

    })

}

export const getOneAvatar = async () => { 
    //change character id
    const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab6912?affiliation=Water+Tribe');
    const oneCharacter = await res.json();

    return oneCharacter;
}