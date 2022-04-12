import React, { useEffect, useState } from 'react';
import Work from '../Work/Work';

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div>
            <h2>Services: {services.length}</h2>
            {
                services.map(service => <Work key={service.id} service={service}></Work>)
            }
        </div>
    );
};

export default Services;