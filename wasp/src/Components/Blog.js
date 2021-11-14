import React, { useEffect } from'react'
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';


const cookies = new Cookies();
function Blog() {

    const history = useHistory();
    useEffect (() => {
        const info = cookies.getAll();
        if(!info['username'] || !info['password']){
            history.push('/login')
        }
    });
    return (
        <div>
            <h1>Blogs</h1>
        </div>
    )
}

export default Blog
