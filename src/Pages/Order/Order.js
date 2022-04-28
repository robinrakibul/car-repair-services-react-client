import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Order = () => {
    const [user] = useAuthState
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        const getOrders = async() =>{
            const url = `http://127.0.0.1:5000/orders`;
            const {data} = await axios.get(url);
            setOrders(data);
        }
        getOrders();
    })
    return (
        <div className='container mt-3'>
            <h3>Your Orders {orders.length}</h3>
        </div>
    );
};

export default Order;