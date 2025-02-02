import React from 'react'

interface propsType{
    img:string,
    title:string,
    comment:string,
    date:string,
}

const BlogCard:React.FC<propsType>=({img, title, comment, date})=> {
  return (
    <div className='space-y-4'>
        <img className='rounded-lg hover:scale-105 trnasition-transform' src={img} alt="" />
        <div className='text-accent font-medium'>
            <span>{date} /</span>
            <span>{comment} Comments</span>
        </div>
            <h3 className="font-bold text-xl">{title}</h3>
      
    </div>
  )
}

interface propsType{
    img:string,
    title:string,
    comment:string,
    date:string,
}

export default BlogCard
