import React from 'react';
import { useState, useRef } from 'react';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';


const cookies = new Cookies();
function Login() {

    const userNameRef = useRef("");
    const passwordRef = useRef("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        cookies.set('username', userNameRef.current.value, { path: '/' });
        cookies.set('password', passwordRef.current.value, { path: '/' });
        history.push('/blogs');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter username" ref={userNameRef}/>
                <br />
                <input type="password" placeholder="Enter password" ref={passwordRef}/>
                <br/>
                <br />
                <button type="Submit">Submit</button>
            </form>
        </div>
    )
}

export default Login
