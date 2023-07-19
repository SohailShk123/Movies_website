import React, { useState } from 'react'
import { Header, Nav, Movies } from '../components'

function Home() {
  const [value , setValue] = useState(null)
  const [url, setUrl] = useState(null)
  console.log(value)
  console.log(url)
  return (
    <>

      <Header />
      <Nav setter={setValue} />
      <Movies value={value}/>

    </>
  )
}

export default Home