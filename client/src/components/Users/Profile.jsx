import React, { useState, useEffect } from 'react';
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
                // console.log(res)
                setData(res)

            })
    }, []);
    return (
        <div className="profile">
            {
                data ?
                    (
                        <div>
                            <h3>Welcome to your profile, {data.username}!</h3>
                            <ul>
                                {console.log(data.orders)}
                                {
                                    data.orders.map(order =>
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
        </div>
    )
}

export default Profile;