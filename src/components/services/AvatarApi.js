export const getAvatars = async () => { 

    const res = await fetch('');
    const avatars = res.json() 

    return avatars.map((avatar) => {
        
    })

}