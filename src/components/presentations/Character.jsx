import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Character = ({name, affiliation, image, allies}) => {
  
        return (
            <div>
                <p>Character Name: {name}</p>
                <img src={image} alt={name}/>
                <p> Affiliation: {affiliation}</p>
                <p> Allies: {allies}</p>
            </div>
        )
    
}


Character.propTypes = { 

}
export default Character;
