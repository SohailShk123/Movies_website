import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../utils/api';
import {HandThumbUpIcon} from '@heroicons/react/24/outline'

function Movies({ value }) {

  const [info, setInfo] = useState()
  const BaseUrl = 'https://image.tmdb.org/t/p/original'

  const fetchData = async () => {
    const { data } = await axios(`${value || "/movie/now_playing?api_key=49f094204a52eadc5e4928ca558eceeb"}`)
    console.log('data', data.results)
    setInfo(data.results)
  }

  useEffect(() => {
    fetchData()

    return () => {
      fetchData()
    }
  }, [value])
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3  3xl:flex flex-wrap justify-center'>
      {info?.map((item) => (
        <div key={item.id} className='group cursor-pointer  p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
          <img src={`${BaseUrl}${item.backdrop_path}`} alt="imgs" />
          <div className='p-2'>
            <p className='truncate max-w-md'>{item.overview}</p>
            <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold' >{item.title || item.original_name}</h2>
            <p className='flex items-center opacity-0 group-hover:opacity-100'>{item.release_date}.  {" "}
            <HandThumbUpIcon className='h-5 mx-2'/>{" "}
            {item.vote_count}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Movies