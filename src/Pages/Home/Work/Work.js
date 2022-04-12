import React from 'react';
import './Work.css';
const Work = ({service}) => {
    const {name, img, description, price} = service;
    return (
        <div className='work'>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button>Book: {name}</button>
        </div>
    );
};

export default Work;