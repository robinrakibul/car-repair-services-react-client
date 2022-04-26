import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='container mt-2'>Please Checkout Your Booking</h2>
        </div>
    );
};

export default Checkout;