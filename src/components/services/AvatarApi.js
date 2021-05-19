export const getAvatars = async () => { 
    const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=Water+Tribe');
    const avatars = await res.json() 


    return avatars.map(avatar => ({
        id: avatar._id,
        allies: avatar.allies,
        name: avatar.name,
        affiliation: avatar.affiliation,
        image: avatar.photoUrl

    }));

}

export const getOneAvatar = async (id) => { 
    
    const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}?affiliation=Water+Tribe`);
    
    const oneCharacter = await res.json();
    
    return oneCharacter;
}