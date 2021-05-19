import React, {useState, useEffect } from 'react'
import { getAvatars } from '../services/AvatarApi'
import CharacterList  from '../presentations/CharacterList'
import styles from './Containers.css'
import avatar from '../../assets/avatar.png'

const MainPage = () => {
    const [avatars, setAvatars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAvatars()
            .then(characters => {
                setAvatars(characters)
            })
            .finally(() => setLoading(false));

    }, [])

    return(
        <div>
            <CharacterList 
                avatars={avatars}
                loading={loading}
            />
        </div>
    )
    
}

export default MainPage;
