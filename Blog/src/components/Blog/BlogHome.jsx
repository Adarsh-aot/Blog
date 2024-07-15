import React, { useEffect , useState } from 'react'
import Card from './CardBlog'
import axios from 'axios'
import FormComponent from './FormComponent'
import { Link } from 'react-router-dom'
import BASE_URL from '../Constant/Base_Url'

function BlogHome() {
    const [data , setData] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}/Blog`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    })


  return (
    <>
        
       
        <div className="mt-4 flex flex-row justify-between">
            <Link to={'/Blog/form'}>
                <button className="px-4 py-2 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-75 transition duration-300 ease-in-out">
                    Add Blog
                </button>
            </Link>
            <div className="right flex flex-row gap-1">
                <Link to={'/Blog/MyBlog'}>
                    <button className="px-4 py-2 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-75 transition duration-300 ease-in-out">
                        My Blog
                    </button>
                </Link>
                <Link to={'/'}>
                    <button className="px-4 py-2 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-75 transition duration-300 ease-in-out">
                        Log Out
                    </button>
                </Link>
            </div>

        </div>
        <div className="container flex flex-row flex-wrap">
            {data.map((item) => (
                <Card id={item.id} type={true} title={item.title} content={item.content} />
                
            ))}
        
        </div>
       
    </>
  )
}

export default BlogHome