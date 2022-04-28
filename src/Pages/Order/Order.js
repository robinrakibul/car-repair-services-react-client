import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        const getOrders = async() =>{
            const email = user.email;
            const url = `https://pure-garden-17603.herokuapp.com/orders?email=${email}`;
            const {data} = await axios.get(url);
            setOrders(data);
        }
        getOrders();
    },[user])
    return (
        <div className='w-50 mx-auto'>
            <h3>Your Orders {orders.length}</h3>
            {
                orders.map(order=><div key={order._id}>
                    <p>Service Name:{order.service}</p>
                    <p>Service Cost:{order.service}</p>
                </div>
                )
            }
        </div>
    );
};

export default Order;