import React, { useEffect, useState } from'react'
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';


const cookies = new Cookies();
function Blog() {

    const history = useHistory();
    const [blogs, setBlogs] = useState([]);

    const getBlogs = async () => {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }; 

        let res = await fetch('http://localhost:8080/blogs', requestOptions)
        res = await res.json()
        // res = JSON.parse(res)
        console.log(res)
        await setBlogs(res)
        console.log('blogs')
        console.log(blogs)
    }

    useEffect (() => {
        const info = cookies.getAll();
        if(!info['username'] || !info['password']){
            history.push('/login')
        }
        getBlogs();        
    }, []);
    return (
        <div>
            <h1>Blogs</h1>
            <hr/>
            <br/>
            {blogs.map( (blog) => {
                <div id={blog.id}>
                    <h3>{blog.title}</h3>
                    <hr/>
                </div>
            } )}
        </div>
    )
}

export default Blog
