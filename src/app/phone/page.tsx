import Products from '@/components/products/page'
import React from 'react'

const getData = async () => {
    const res = await fetch("https://jsonserver.reactbd.com/phone")
    if (!res.ok){
        throw new Error("Failed to fetch data")
    }
    return res.json()
}


export default async function PhonePage() {
    const products = await getData()
  return (
    <div className='min-h-screen w-full'>
       <div className=''>
       <Products products={products} linkBasePath={'/singleproduct'}/>
       </div>
    </div>
  )
}
