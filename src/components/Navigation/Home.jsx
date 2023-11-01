import React from 'react'
import About from './About'
import Destination from './Destination'

function Home() {
  return (
    <>
    <section>
      <div></div>
    <div className='my-home'>
      <h1>Experience travel  with us,<span>  travel and learn</span></h1>
      <p>We wish everybody should travel with us through join our platform,
           because we helpeach other to travel where ever the world.</p>
    </div>
    </section>
    <About/>
    <Destination/>
    </>
  )
}

export default Home