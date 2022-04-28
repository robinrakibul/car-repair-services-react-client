import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://pure-garden-17603.herokuapp.com/service`;
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })

        .then(res=>res.json())
        .then(result =>{
            console.log(result);
        })
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2>Please add a service!</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("Name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("Description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;