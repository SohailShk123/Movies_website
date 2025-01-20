import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../utils/api';
import {HandThumbUpIcon} from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux';
import { fetchId } from '../redux/dataFetch';

function Movies({ value }) {

  const [info, setInfo] = useState()
  const navigate = useNavigate()
  const BaseUrl = 'https://image.tmdb.org/t/p/original'
  const dispatch = useDispatch()

  const fetchData = async () => {
    const { data } = await axios(`${value || `/movie/now_playing?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`}`)
    setInfo(data.results)
  }

  useEffect(() => {
    fetchData()

    return () => {
      fetchData()
    }
  }, [value])
  return (
    <>
      {info?.map((item) => (
        <div key={item.id} className='group cursor-pointer  p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'
        onClick={(e)=>{navigate(`/details/${item.id}`);
        dispatch(fetchId(item.id))
      }}
        >
          <img src={`${BaseUrl}${item.poster_path}`} alt="imgs" />
          <div className='p-2'>
            <p className='truncate max-w-md'>{item.overview}</p>
            <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold' >{item.title || item.original_name}</h2>
            <p className='flex items-center opacity-0 group-hover:opacity-100'>{item.release_date}.  {" "}
            <HandThumbUpIcon className='h-5 mx-2'/>{" "}
            {item.vote_count}</p>
          </div>
        </div>
      ))}
      </>
  )
}

export default Movies