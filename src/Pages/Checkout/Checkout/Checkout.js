import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div>
            <h2 className='container mt-2'>Please Order: {service.name}</h2>
        </div>
    );
};

export default Checkout;