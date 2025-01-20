import React, { useEffect, useState } from 'react'
import { HeaderItems } from '../components'
import { HomeIcon, CheckBadgeIcon, CircleStackIcon, BoltIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import { fetchOne } from '../redux/dataFetch'


function Header() {
  const [input , setInput] = useState('')
  const dispatch = useDispatch()
  

 
useEffect(()=>{
  dispatch(fetchOne(input))
},[input])
  return (
    <header className='flex flex-col sm:flex-row justify-evenly items-center h-auto mx-auto'>

      <img className='object-contain' src="https://links.papareact.com/ua6" width={200} height={100} alt="img" />

      <div className='w-[40%]  flex items-center justify-center '>
        <input type="text" placeholder='Search..' value={input} onChange={e=>setInput(e.target.value)} className='bg-[#06202A] p-2 pl-4 w-full border-2 mb-4' />
      </div>

      <div className='flex flex-grow justify-evenly max-w-2xl '>
        <HeaderItems title="HOME" Icon={HomeIcon} />
        <HeaderItems title="COLLECTION" Icon={CircleStackIcon} />
        <HeaderItems title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderItems title="USER" Icon={UserIcon} />
      </div>
    </header>
  )
}

export default Header