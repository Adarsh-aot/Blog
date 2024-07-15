import React, { useEffect, useState } from 'react'
import Card from './CardBlog'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function MyBlog() {
    const [data, setData] = useState([])
    const navigate = useNavigate();
    const fetchData = () => {
        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `${token}`
        };
        axios.get('http://localhost:3000/Blog/MyBlog', { headers })
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData();
    }, [])

    const blogDelete = (id) => {
        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `${token}`
        };
        axios.delete(`http://localhost:3000/Blog/${id}`, { headers })
            .then(res => {
                console.log(res.data);
                // Remove the deleted item from the state
                setData(data.filter(item => item.id !== id));
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="mt-4 flex flex-row justify-between">
                <Link to={'/Blog/form'}>
                    <button className="px-4 py-2 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-75 transition duration-300 ease-in-out">
                        Add New Blog
                    </button>
                </Link>
                <Link to={'/Blog'}>
                    <button className="px-4 py-2 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-75 transition duration-300 ease-in-out">
                        Back
                    </button>
                </Link>
            </div>
            <div className="container flex flex-row flex-wrap">
                {data.map((item) => (
                    <div key={item.id} className="flex flex-col items-stretch m-2 mt-2 px-4 py-2 focus:ring-opacity-50 transition duration-300">
                        <Card id={item.id} type={true} title={item.title} content={item.content} />
                        <button 
                            className="mt-2 px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300"
                            onClick={() => navigate(`/Blog/form/${item.id}`)}
                        >
                            Edit
                        </button>
                        <button 
                            className="mt-2 px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300"
                            onClick={() => blogDelete(item.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MyBlog