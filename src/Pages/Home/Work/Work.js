import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Work.css';
const Work = ({service}) => {
    // destructuring
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`)
    }

    return (
        <div className='work'>
            <img className='w-100' src={img} alt="" />
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            {/* wrapping with arrow function */}
            <button onClick={()=> navigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Work;