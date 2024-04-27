import React from 'react';
import classes from './description.module.css'

const Description = ({title, description}) => {
    return (
        <div className="descriptions">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Description;