import React, { useEffect, useState } from 'react';
import Work from '../Work/Work';
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div id="services" className='container'>
            <h1 className='text-primary text-center mt-5 mb-5'>Our Services</h1>
            <div className="services-container">
            {
                services.map(service => <Work key={service._id} service={service}></Work>)
            }
            </div>
        </div>
    );
};

export default Services;