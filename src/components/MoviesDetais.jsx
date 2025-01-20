import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Cast from './Cast'
import slugify from 'react-slugify'

const MoviesDetais = () => {
  const [castData, setCastData] = useState([])
  const [video, setVideo] = useState([])
  const [moviedet,setMoviedet] = useState([])
  const { id } = useParams()
  const dispatch = useDispatch()
  const selector = useSelector(state => state?.AsyncFetchData?.dataId?.data)
  const BaseUrl = 'https://image.tmdb.org/t/p/original'

  const actor = async (id) => {
    const { data } = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&language`)
    // console.log(data.cast)
    setCastData(data.cast)
  }
  const fetchVideo = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&language=en-US`
    );
    const videodata = await data.json();
    setVideo(videodata.results);
    console.log(videodata.results);
  }
  const fetchMovie = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&language=en-US`
    );
    const moviedetail = await data.json();
    setMoviedet(moviedetail);
    console.log(moviedetail);
  
  };
  useEffect(() => {
    actor(id)
    fetchVideo(id)
    fetchMovie(id)
  }, [id])

  return (
    <div className='text-white text-center'>
      <div className='relative'>
        <img src={`${BaseUrl}${selector?.backdrop_path}`} alt={`${selector?.title}`} className='p-3'/>
        <h3 className='absolute inset-x-0 bottom-12 flex justify-center text-2xl md:text-4xl font-bold'>{selector?.title}</h3>
      </div>
      <div className='flex flex-col items-center '>

        <p className='p-5 text-xl '>{selector?.overview}</p>
        <p className='p-2 rounded-full font-semibold border-2 border-blue-300 bg-[#1f2937]'>Release Date : {selector?.release_date}</p>
        <div className='flex space-x-5 p-5'>
          {selector?.genres.map((item) => (
            <p key={item.id} className='p-2 rounded-full font-semibold border-2 border-blue-300 bg-[#1f2937] '>{item.name}</p>
          ))}
        </div>
        <p className='text-3xl font-semibold'>Cast</p>
        <div className="md:px-5 flex flex-row my-5 max-w-full flex-start overflow-x-auto relative scrollbar-thin scrollbar-thumb-gray-500/20 scrollbar-track-gray-900/90 md:pb-3">
          {castData.map((cast) => <Cast key={cast.id} {...cast} />)}
        </div>
      </div>
      <div className='flex justify-center items-center mb-10 gap-5 flex-wrap'>
        {Array?.from(video).filter(trail => trail.type === "Trailer").map((trail, index) => (
          <div key={trail.id}>
              <a href={'https://www.youtube.com/watch?v=' + trail.key} target="_blank" className='flex border-2 border-red-600 bg-red-600/40 p-3 items-center justify-center gap-2 text-xl font-semibold rounded-full text-white'>
                Watch trailer {Array?.from(video)?.filter(trail => trail.type === "Trailer").length > 1 ? index + 1 : ""}
              </a>
         
          </div>
        ))
        }
      </div>

      {/* watch movie */}
      <div className='flex justify-center items-center mb-10 gap-5 flex-wrap animate-pulse'>
              <Link className='flex border-2 border-green-600 bg-green-600/40 p-3 items-center justify-center gap-2 text-xl font-semibold rounded-full text-white'>
                Watch Movie Comming Soon
              </Link>
            </div>
    </div>
  )
}

export default MoviesDetais