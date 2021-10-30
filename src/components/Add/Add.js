import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./Add.css"

const Add = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://still-shore-02172.herokuapp.com/activities', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Activity Added Succesfully')
                    reset();
                }
            })
    };
    return (
        <div className="mt-5 mb-5  activity-form w-75  p-5 mx-auto">
            <h1 className="tittle">Add Activity</h1>
            <form className="mt-5 pp add" onSubmit={handleSubmit(onSubmit)}>
                <label className="mx-4" htmlFor="Name"> Name : </label>
                <input {...register("name", { required: true, maxLength: 20 })} />
                <br />
                <br />
                <label className="mx-2" htmlFor="Name"> Description : </label>
                <input {...register("description", { required: true, maxLength: 200 })} />
                <br />
                <br />
                <label className="mx-2" htmlFor="Name"> Image URL : </label>
                <input {...register("img", { required: true })} />
                <br />
                <br />
                <input className="btn-2 text-dark" type="submit" />
            </form>



        </div>
    );
};

export default Add;