import React from 'react'
import { HeaderItems } from '../components'
import { HomeIcon, CheckBadgeIcon, CircleStackIcon, BoltIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl '>
        <HeaderItems title="HOME" Icon={HomeIcon} />
        <HeaderItems title="TREND" Icon={BoltIcon} />
        <HeaderItems title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItems title="COLLECTION" Icon={CircleStackIcon} />
        <HeaderItems title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderItems title="USER" Icon={UserIcon} />
      </div>
     
        <img className='object-contain' src="https://links.papareact.com/ua6" width={200} height={100} alt="img" />
 
    </header>
  )
}

export default Header