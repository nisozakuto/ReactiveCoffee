import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../../modules/Auth'

const Profile = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        console.log('fetch the info here')
        fetch('/profile', {
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`
            }
        })
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
    }, []);

    // fetch(`/orders`

    return (
        <div className="profile">
            {data ?
                (
                    <div>
                        <h1>{data.user.username}</h1>
                        <ul>
                            {data.orders.map(order =>
                                (
                                    <li key={order.id}>
                                        <h2>{order.user_id}</h2>
                                        <h2>{order.coffees_order_id}</h2>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
                :
                <p>Loading</p>
            }
            {!Auth.isUserAuthenticated() && <Redirect to="/login" />}

        </div>
    )
}

export default Profile;