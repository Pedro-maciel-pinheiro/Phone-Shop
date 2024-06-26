import { getSingleProductPhoneCase } from '@/helper'
import Image from 'next/image'
import React from 'react'

type Props = {
    searchParams:{[key:string]:string| string[] | undefined}
}

const SingleProductCase = async ({searchParams}:Props) => {
    const _idString = searchParams?._id
    const _id = Number(_idString)
    const product = await getSingleProductPhoneCase(_id)
    
  return (
    <div className='min-h-screen w-full'>
        <Image src={product?.image} alt={product?.title} width={400} height={400}/>
        <p>{product.isNew && "New Item"}</p>
        <p>{product.price}</p>
    </div>
  )
}

export default SingleProductCase