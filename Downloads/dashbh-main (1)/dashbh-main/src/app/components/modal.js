"use client"

import React, { Children } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

export default function Modal({isVisible,onClose,children,title}) {
    if(!isVisible) return null;
    const handleClose=(e)=>{
        if(e.target.id==='wrapper') 
        onClose();
    }    

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm  flex justify-center items-center' id="wrapper" onClick={handleClose}>
        <div className='w-2/5	min-w-64 h-[630px] bg-tertiaryHover bg-opacity-90 p-3 rounded  '>
            <div className='flex justify-between'>
            <div></div>
            <h2 className='text-white font-bold'>{title}</h2>
              <button className='text-xl' onClick={()=>onClose()}>
                <XMarkIcon className="h-5 w-5 text-secondary hover:text-secondaryHover"/>
              </button>
            </div>
            <div className='flex flex-col  items-center mt-5'>
              {children}
            </div>

        </div>
        
        
    </div>
  )
}
