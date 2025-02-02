import React from 'react'
import { LiaShippingFastSolid, LiaMoneyBillWaveSolid, LiaGiftSolid, } from "react-icons/lia"
import { FiPhoneCall } from 'react-icons/fi'
import FeatureCard from './FeatureCard'
const data =[
    {
        title:"Free Shiping",
        icon:<LiaShippingFastSolid/>
    },
    {
        title:"Best Price Guarantee",
        icon:<LiaMoneyBillWaveSolid/>
    },
    {
        title:" Free Curbside Pickup",
        icon:<LiaGiftSolid/>
    },
    {
        title:"Support 24/7",
        icon:<FiPhoneCall/>
    },
]

function FeatureSection() {
  return (
    <div className='container pt-16'>
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {data.map(e=>( <FeatureCard key={e.title} title={e.title} icon={e.icon}/>))}
    </div>
      
    </div>
  )
}

export default FeatureSection
