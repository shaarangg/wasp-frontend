import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <h3>WASP</h3>
            <ul>
                <Link to="/login">
                    <li>Login</li>
                </Link>
                <Link to="/blogs">
                    <li>Blogs</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
