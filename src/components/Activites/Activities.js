import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import "./Activities.css"

const Activities = () => {

    const [activites, setActivites] = useState([])

    useEffect(() => {
        fetch("https://still-shore-02172.herokuapp.com/activities")
            .then(res => res.json())
            .then(data => setActivites(data))
    }, [])


    return (
        < div >
            <p className="tittle">Activities</p>
            <div className="service-container">
                {
                    activites.map(activity =>
                        <Activity
                            key={activity._id}
                            activity={activity}
                        >
                        </Activity>
                    )
                }
            </div>
        </div >
    );
};

export default Activities;