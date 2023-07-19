import React from 'react'
import { api } from '../utils/api';
import { useNavigate } from 'react-router-dom';

function Nav({setter}) {
    const navigate = useNavigate();

  return (

   <nav className='relative'>
     <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20  overflow-x-scroll scrollbar-hide '>
     {api.map((mov)=>(
        <h1 key={mov.title}
        onClick={()=>{navigate(`/?genre=${mov.name}`);
              setter(mov.url)
            }      
      }
         className='last:pr-24 cursor-pointer transition duration-100 transform hover:text-white hover:scale-125 active:text-red-500'
        >{mov.title}</h1>
     ))}
    </div>
    <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12'/>
   </nav>
  )
}

export default Nav