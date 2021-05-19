import React, {useState, useEffect, } from 'react'
import { getOneAvatar } from '../services/AvatarApi'
import styles from './Containers.css'


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
            {
                loading
                    ?
                <h2>Loading...</h2>
                    :
                <div className={styles.detail}  style={{textAlign:'center', marginTop: '50px'}}>
                    <img className={styles.dImage} src={oneAvatar.photoUrl} alt={name} style={{borderRadius: '3em'}}/>
                    <h2>{oneAvatar.name}</h2>
                    <p>Gender: {oneAvatar.gender}</p>
                    <p>Hair Color: {oneAvatar.hair}</p>
                    <p>Profession: {oneAvatar.profession}</p>
                    <p>Position: {oneAvatar.position}</p>
                    <p>Allies: {oneAvatar.allies}</p>
                    <p>Enemies: {oneAvatar.enemies}</p>
                    <p>Weapon: {oneAvatar.weapon}</p>
                    <p>Affiliation: {oneAvatar.affiliation}</p>
                    <p>Season: {oneAvatar.first}</p>
                </div>
            }
        </div>
        )
    
}

export default DetailPage;