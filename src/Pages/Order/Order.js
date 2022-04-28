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
        <div className='container mt-3'>
            <h3>Your Orders {orders.length}</h3>
        </div>
    );
};

export default Order;