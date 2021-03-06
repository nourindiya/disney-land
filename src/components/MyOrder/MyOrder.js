import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import BookedActivity from "../BookedActivity/BookedActivity";
import "./MyOrder.css"

const MyOrder = () => {

    const { user } = useAuth();

    const [bookedActivitys, setBookedActivitys] = useState([]);


    useEffect(() => {
        fetch(`https://still-shore-02172.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBookedActivitys(data));

    }, [bookedActivitys])

    if (bookedActivitys.length > 0) {
        return (
            <div className="pink">
                <h1 className="tittle">My Cart  <FontAwesomeIcon icon={faShoppingCart} /> </h1>
                {
                    bookedActivitys.map(singleActivity => <BookedActivity
                        kye={singleActivity._id}
                        singleActivity={singleActivity}
                        bookedActivitys={bookedActivitys}
                        setBookedActivitys={setBookedActivitys}
                    >
                    </BookedActivity>)
                }

            </div>
        )
    }
    else {
        return (
            <h1 className="else tittle center text-muted ">Haven't Added Anything Yet</h1>
        )
    }
};

export default MyOrder;