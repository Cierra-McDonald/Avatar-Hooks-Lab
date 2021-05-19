import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import styles from './Presentations.css'


const Character = ({name, affiliation, image, allies, id}) => {
  
        return (
            <div className={styles.mainCards}>
                <p>Character: {name}</p>
                <Link exact="true" activeclassname="selected" to={`/details/${id}`}>
                <img src={image} alt={name} style={{width: '250px', borderRadius: '5em'}} className={styles.mainPic}/>
                </Link>
                <p> Affiliation: {affiliation}</p>
                <p> Allies: {allies}</p>
            </div>
        )
    
}


Character.propTypes = { 
    name: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
    allies: PropTypes.array.isRequired
}

export default Character;
