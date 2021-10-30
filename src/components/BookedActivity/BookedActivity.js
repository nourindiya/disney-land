import React from 'react';
import "./BookedActivity.css"

const BookedActivity = ({ singleActivity, bookedActivitys, setBookedActivitys }) => {
    const { activity, status, _id, description } = singleActivity;

    const handledelete = (id) => {
        const procceed = window.confirm('Are you sure to remove this activity?');
        if (procceed) {
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully cancelled.')
                        const remainingPackages = bookedActivitys.filter(BookedActivity => BookedActivity._id !== id)
                        setBookedActivitys(remainingPackages);
                    }
                })
        }
    }

    return (
        <>
            <div className="order mx-auto p-3">
                <h1 className="pp -3"> {description}</h1>
                <h1 className="pp ">{activity}</h1>
                <button className="blue m-3">{status}</button>
                <input className="red" type="button" value="Cancel" onClick={() => handledelete(_id)} />
            </div>
        </>
    );
};

export default BookedActivity;