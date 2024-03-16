import { useEffect } from "react";
import { useState } from "react";
import Detail from "../details/Detail";


const Blog = () => {
    const [blog,setblog]= useState([])

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setblog(data))
    },[])
    return (
        <div className="w-full lg:w-2/3">
            <h1 className="text-2xl">Blogs:{blog.length}</h1>
            {
                blog.map(blog => <Detail key={blog.id} blog={blog}></Detail>)
            }
        </div>
    );
};

export default Blog;