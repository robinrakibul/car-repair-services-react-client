import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Work.css';
const Work = ({service}) => {
    // destructuring
    const {_id, name, img, description, price} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${_id}`)
    }

    return (
        <div className='work'>
            <img className='w-100' src={img} alt="" />
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            {/* wrapping with arrow function */}
            <button onClick={()=> navigateToServiceDetail(_id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Work;