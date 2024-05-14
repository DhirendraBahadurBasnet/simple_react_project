import React from 'react'

interface propsType{
    img:string,
    name:string,
    count:string
}
const CategoryCard:React.FC<propsType>=({img, name, count})=> {
  return (
    <div className='border border-gray-300 hover:border-gray-400 hover:scale-105 transition-transform rounded-lg'>
        <div className="flex justify-between items-center">
            <div className="space-y-2 flex flex-col items-start ml-4">
                <h3 className="font-medium text-xl ">{name}</h3>
                <p className="text-gray-500">{count}</p>
            </div>
            <img className='w-[100px]' src={img} alt={img} />
        </div>
      
    </div>
  )
}

export default CategoryCard
