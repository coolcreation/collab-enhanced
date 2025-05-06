import React from 'react'
import Accordion from '../components/Accordion'
import Carousel from '../components/Carousel'

function HomePage() {
  return (
    <div className='container'>
      <h1>Home page</h1>

      <div className='component'>
        <Carousel />
        <Accordion />
      </div>

    </div>
  )
}

export default HomePage
