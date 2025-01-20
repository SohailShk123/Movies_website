import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './Home'
import MoviesDetais from '../components/MoviesDetais'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<MoviesDetais />} />
    </Routes>
  )
}

export default Routing