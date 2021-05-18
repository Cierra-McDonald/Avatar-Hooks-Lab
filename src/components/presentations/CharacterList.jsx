import React from 'react'
import PropTypes from 'prop-types'
import Character from './Character'

const CharacterList = ({ avatars }) => {
 
        return (
            <div>
                <ul>
                    {avatars.map(avatar => 
                        (<li key={avatar.id}>
                            <Character 
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
}

export default CharacterList;
