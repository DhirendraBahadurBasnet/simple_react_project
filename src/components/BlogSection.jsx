import React from 'react'
import BlogCard from './BlogCard'

const data=[
    {
        img:"/post__1.webp",
        title:"Healthy Food Healthy Life",
        date:"Aug 27, 2024",
        comment:8,
    },
    {
        img:"/post__2.webp",
        title:"Healthy Food Healthy Life",
        date:"Aug 13, 2024",
        comment:2,
    },
    {
        img:"/post__3.webp",
        title:"Healthy Food Healthy Life",
        date:"Aug 20, 2024",
        comment:7,
    },

]

function BlogSection() {
  return (
    <div className='container pt-16'>
    <h2 className='font-bold text-2xl'>Latest News</h2>
    <p className="text-gray-500">Present posts in a best way to highlight interesting moments of your blogs.</p>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map(e=>(<BlogCard img={e.img} title={e.title} date={e.date} comment={e.comment}/>))}
    </div>
      
    </div>
  )
}

export default BlogSection
