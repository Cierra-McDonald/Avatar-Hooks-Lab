import React from 'react'
import PropTypes from 'prop-types'
import Character from './Character'
import styles from './Presentations.css'


const CharacterList = ({ avatars, loading }) => {
 
        return (
            <div>
                {
                loading
                    ?
                <h2>Loading...</h2>
                    :
                <ul  aria-label="avatars" className={styles.ul}>
                    {avatars.map(avatar => 
                        (<li key={avatar.id} className={styles.list}>
                            <Character 
                                id={avatar.id}
                                name={avatar.name}
                                image={avatar.image}
                                affiliation={avatar.affiliation}
                                allies={avatar.allies}
                                />
                        </li>) 
                        )}
                </ul>
                }
            </div>
        )
    
}

CharacterList.propTypes = { 
    avatars: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default CharacterList;
