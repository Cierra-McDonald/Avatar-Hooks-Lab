import React from 'react'
import PropTypes from 'prop-types'
import Character from '../presentations/Character'

const CharacterList = ({ avatars, loading }) => {
 
        return (
            <div>
                <ul  aria-label="avatars">
                    {avatars.map(avatar => 
                        (<li key={avatar.id}>
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
            </div>
        )
    
}

CharacterList.propTypes = { 
    avatars: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default CharacterList;
