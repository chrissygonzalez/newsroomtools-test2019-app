import React from 'react';

const Image = (props) => {
    return (
        <figure className="image col-4">
            <img src={props.href} alt={props.caption} />
            <figcaption>
                <span className="credit">{props.credit}</span><br />
                <span className="caption">{props.caption}</span>
            </figcaption>
        </figure>
    )
}

export default Image; 