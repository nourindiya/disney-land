import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import "./BookingForm.css"

const BookingForm = ({ activity }) => {

    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();


    const onSubmit = (shippingInfo, e) => {
        const status = 'pending'
        const { name, email, description } = shippingInfo;
        const orderData = { name, email, status, activity, description }
        axios.post('http://localhost:5000/orders', orderData)
            .then(res => {
                if (res.data.insertOne) {
                    alert('Order Placed Successfully')
                    reset()
                }
            })
    };


    const onError = (errors, e) => console.log(errors, e);



    return (
        <div className="c-form mb-5 w-50 mx-auto">

            <h1 className="tittle">Confirm Booking Here :</h1>

            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <input {...register("name")} value={user.displayName} placeholder="Customer Name" className="mb-2 pp" />
                <br />
                <input {...register("email")} placeholder="Customer Email pp" value={user.email} className="mb-2" />
                <br />
                <input className="btn-2 mb-3" type="submit" />
            </form>

        </div>
    );
};

export default BookingForm;