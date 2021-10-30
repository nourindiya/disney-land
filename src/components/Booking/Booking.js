import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookingForm from '../BookingForm/BookingForm';
import "./Booking.css"

const Booking = () => {

    const { id } = useParams();
    // console.log(id);

    const [booking, setBooking] = useState({})

    useEffect(() => {
        fetch(`https://still-shore-02172.herokuapp.com/booking/${id}`)
            .then(res => res.json())
            .then(data => setBooking(data))

    }, [])

    const { name, description, img } = booking;

    return (
        <>
            <div className="info-container w-50 m-5 mx-auto">
                <div className="img">
                    <img className="mt-3 w-75" src={img} alt="" />
                </div>

                <div className="info p-3">
                    <p className="tittle">{name}</p>
                    <p className="pp">{description}</p>
                </div>

            </div>
            <div>
                <BookingForm
                    key={booking._id}
                    activity={name}
                >
                </BookingForm>
            </div>
        </>
    );
};

export default Booking;