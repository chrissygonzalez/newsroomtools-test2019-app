import React from 'react';

const Graphic = (props) => {
    return (
        // <p>hello</p>
        <figure className="graphic col-4">
            <img src={props.image} alt={props.headline} />
            <h3>{props.headline}</h3>
            <p>{props.desc}</p>
        </figure>
    )
}

export default Graphic; 