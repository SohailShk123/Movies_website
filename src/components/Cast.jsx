import React from 'react'

const Cast = ({ ...cast }) => {
    return (
        <>
            {cast.profile_path  &&
                <div className='flex min-w-[9rem] md:min-w-[10rem] max-w-[9rem] md:max-w-[10rem] h-full items-center text-center flex-col mx-1 '>
                    <img src={"https://image.tmdb.org/t/p/w500" + cast.profile_path} className="w-full h-full rounded-xl" />
                    <p className='text-white'>{cast.name}</p>
                    <p className='text-blue-300'>({cast.character})</p>
                </div>
            }
        </>
    )
}

export default Cast