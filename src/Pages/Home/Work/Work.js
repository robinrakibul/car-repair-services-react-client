import React from 'react';

const Work = ({service}) => {
    const {name, img, description, price} = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>This is a single service: {name}</h2>
        </div>
    );
};

export default Work;