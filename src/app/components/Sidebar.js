import {PlusIcon,ChevronDoubleRightIcon,ChevronDoubleLeftIcon} from '@heroicons/react/24/solid'
import NextLink from 'next/link'
import { useState } from 'react';
import { useSide } from '../context/sideContext';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Image from 'next/image';
export default function Sidebar() {
  const router = useRouter();
  const handleLogout = async () => {
    localStorage.removeItem("authenticated"); 
    localStorage.removeItem("email");
    localStorage.removeItem("nom");

    router.push('/');
}
    const { sidebar,nom,email,setsidebar,handleSidebar} = useSide();
  return (
    
    <> 
      <div className={sidebar ? "bg-black fixed opacity-70 inset-0 z-10" : "hidden"} onClick={handleSidebar}>
        
      </div>
      <div className={`fixed inset-y-0 left-0 transform  ${sidebar ? "translate-x-0" : "-translate-x-full"} transition-transform duration-200 ease-in-out bg-gray-300	 py-10 w-64 min-h-screen z-20 `}>
        <div className='mb-10'>
        <div>
          <Image src={require("../../../public/logo.png")} width={40} height={30} className='absolute top-4  p-1' />
        </div>
        <div>
          <button className='absolute top-4 right-4 p-1 rounded-full text-gray-500 hover:text-red-400' onClick={handleSidebar}>
            <ChevronDoubleLeftIcon className="h-10 w-10 text-primary hover:text-primaryHover" />
          </button>
        </div>
        </div>
        <ul className='flex flex-col text-blue-800 '>
          <li>
          <div className='bg-gray -100 text-xl font-bold inline-flex items-center px-4 py-2 transition w-full ' >
                            <span className='text-red-800  mr-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> </span> {nom} </div>
                    
          </li>
                        <li>
                            <div className='bg-gray -100 text-sm font-bold inline-flex items-center px-4 py-2 transition w-full '>
                            <span className='text-red-800 mr-2 ml-0.5'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> </span> {email} </div>
                    
                        </li>
                        <li>
                            <div className='bg-gray -100  font-bold text-gray-500 inline-flex items-center px-4 py-2 transition w-full mb-4 ml-2'>
                          ____________________________</div>
                    
                        </li>
                        <li>
                            <a className='bg-gray -100 font-bold inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100' href="/Articles">
                                <span className='text-red-800  mr-2 ml-0.5'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span> <span className='mt-1'>Articles</span> </a>
                    
                        </li>
                        <li  >
                            <a className='bg-gray -100 font-bold inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100' onClick={()=>handleLogout()}>
                                <span className='text-red-800  mr-2 ml-0.5'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg></span> <span className='mt-1'>LogOut</span> </a>
                    
                        </li>
                    </ul>
                </div>
    </>
    );
}