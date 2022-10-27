import React from 'react'

const Card = ({ picture, title}) => {
  return (
    <div class="card">
        <img src={picture} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default Card