import { BorderLineProps } from '@/types/types'
import React from 'react'






const BorderLine = ({pageNumber}:BorderLineProps) => {
  return (
    <div className='w-full h-24 bg-gray-500'>
       <div>
         <span className='w-16 h-16'>
            0{pageNumber}
         </span>
       </div>
    </div>
  )
}

export default BorderLine