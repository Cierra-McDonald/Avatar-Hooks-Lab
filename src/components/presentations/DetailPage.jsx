import React, {useState, useEffect } from 'react'
import { getOneAvatar } from '../services/AvatarApi'


const DetailPage = (props) => {

    const [oneAvatar, setOneAvatar] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        console.log(props)
        getOneAvatar(props.match.params.id)
            .then(avatar => { 
                setOneAvatar(avatar)
            })
            .finally(() => setLoading(false));
    }, [])
  
        return (
            <div>
                <img src={oneAvatar.photoUrl} alt={name}/>
                <p>{oneAvatar.name}</p>
                <p>{oneAvatar.affiliation}</p>
                <p>{oneAvatar.allies}</p>

            </div>
        )
    
}

export default DetailPage;