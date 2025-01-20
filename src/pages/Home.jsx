import React, { useEffect, useState } from 'react'
import { Header, Nav, Movies } from '../components'
import { useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard'

function Home() {
  const [value, setValue] = useState(null)
  const singleResult = useSelector(state => state.AsyncFetchData.search)

  useEffect(() => {

  }, [singleResult])

  return (
    <>

      <Header />
      <Nav setter={setValue} />

      <div className='mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5  p-3'>
      {(singleResult?.data?.results.length > 0) ? (
        singleResult.data?.results?.map(item => <MovieCard key={item.id} {...item} />)
      ) :
        <Movies value={value} />
      }
        </div>
    </>
  )
}

export default Home