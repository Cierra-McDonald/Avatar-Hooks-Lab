export const getAvatars = async () => { 

    const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=Water+Tribe');
    const avatars = await res.json() 
    console.log(avatars);

    return avatars.map(avatar => ({
        id: avatar._id,
        allies: avatar.allies,
        name: avatar.name,
        affiliation: avatar.affiliation,
        image: avatar.photoUrl

    }));

}

export const getOneAvatar = async () => { 
    //change character id
    const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab6912?affiliation=Water+Tribe');
    const oneCharacter = await res.json();
    console.log(oneCharacter);
    return oneCharacter;
}