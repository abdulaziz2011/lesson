import React from 'react'
import { useLocation } from 'react-router-dom'

function SinglePage() {
    const user = useLocation()?.state
    console.log(user);
    return (
        <div>
            <h1>
                {user.name}
            </h1>
            <h1>
                {user.email}
            </h1>
            <h1>
                {user.phone}
            </h1>
            <h1>
                {user.company.name}
            </h1>
            <h1>
                {user.address.street}
            </h1>
        </div>
    )
}

export default SinglePage