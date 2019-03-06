import React from 'react'
import {Link} from 'react-router-dom'

export const Error = () => {
    return (
        <div>
            <h1>error page</h1>
            <Link to={"/"}>Back</Link>
        </div>
    )
};

export default Error;