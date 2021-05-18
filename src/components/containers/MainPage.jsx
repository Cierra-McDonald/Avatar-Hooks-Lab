import React, {useState, useEffect } from 'react'
import { getAvatars } from '../services/AvatarApi'
import CharacterList  from '../presentations/CharacterList'

const MainPage = () => {
    const [avatars, setAvatars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAvatars()
            .then(characters => {
                setAvatars(characters)
            })

    }, [])

    return(
        <div>
            <CharacterList avatars={avatars}/>
        </div>
    )
    
}

export default MainPage;
