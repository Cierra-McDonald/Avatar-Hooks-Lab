import React from 'react'


const Scroll = (props) => { 
    return( 
        <div style={{overflowY: 'scroll', border: ' solid black', height: '800px', width: '80%', margin: '0 auto', paddingLeft: '7%'}}>
            {props.children}
        </div>
    )

}

export default Scroll