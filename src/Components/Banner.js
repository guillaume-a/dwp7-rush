import React from 'react'

const Banner = ({image, text, alt}) => {
  return (
    <>
    <div className='banner'>
        <img src={image} alt={alt}></img>
        <p>{text}</p>
    </div>
    </>
  )
}

export default Banner