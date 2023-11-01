import React from 'react'
import image from "/image/dash1.jpeg"

function Dashhome() {
  return (
    <>
    <div>
    <div className='left-home'>
        <img src={image} alt="" />
        <div><PiUmbrellaBold/></div>
        <p>Total Bookings</p>
        <h2>897</h2>
        <nav>See more</nav>
    </div>
    <div className='right-home'>
        <img src={image} alt="" />
        <div><PiUmbrellaBold/></div>
        <p>Total expenses</p>
        <h2>$897</h2>
        <nav>See more</nav>
    </div>
    </div>


    </>
  )
}

export default Dashhome