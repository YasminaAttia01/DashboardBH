"use client";

import React from 'react'
import {EyeIcon,PencilIcon,TrashIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function ArticleCard({key,slug,title,category,image,deleteFunction}) {
    const router = useRouter();
     

  return (
    <div key={key} className=" flex flex-row bg-secondary rounded-md py-4 pl-4 w-5/12 mb-4">
        <div  className="flex bg-tertiary rounded-md  p-4 justify-between w-full">
            <div className="flex flex-col justify-between w-full 	">
                <p className=" text-xl text-white ">
                    {title}
                </p>
                <div className="flex flex-row space-x-4 ">
                <button  onClick={()=>{router.push(`Articles/${slug}`)}}>
                    <PencilIcon className="h-6 w-6 text-white hover:text-secondaryHover" />
                    
                </button>
                <button  onClick={()=>{router.push(`Articles/${slug}`)}}>
                   <EyeIcon className="h-6 w-6 text-white hover:text-secondaryHover"/>
                </button>
    
                </div>

            </div >
            <div>
                    <img src={"https://back.durandfrenchmix.fr/api/"+image} width={90} alt="image"  />
            </div>
        </div>
        <div className="align place-self-center px-5">
        <button  onClick={()=>{deleteFunction({slug,category})}}>
              <TrashIcon  className="h-8 w-8 text-[#DF0000] hover:text-red-900"  />
        </button>
       </div>
 </div>
  )
}
