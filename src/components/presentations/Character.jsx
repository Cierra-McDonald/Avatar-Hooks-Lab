import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Character = ({name, affiliation, image, allies, id}) => {
  
        return (
            <div>
                <Link exact="true" activeclassname="selected" to={`/details/${id}`}>
                <img src={image} alt={name}/>
                </Link>
                <p>Character Name: {name}</p>
                <p> Affiliation: {affiliation}</p>
                <p> Allies: {allies}</p>
            </div>
        )
    
}


Character.propTypes = { 
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
    allies: PropTypes.array.isRequired
}

export default Character;
