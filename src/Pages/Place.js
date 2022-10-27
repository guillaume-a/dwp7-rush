import React from 'react'
import { useParams } from 'react-router-dom'
import places from '../api/logements.json'
import Label from '../Components/Label';

const Place = () => {

  const { id } = useParams();
  const place = places.find(place => place.id === id)

  return (
    <>
    <div>Slideshow</div>
    <div>
        <div>
            <h1>{place.title}</h1>
            <h2>place</h2>
        </div>
        <div>Host</div>
    </div>

    <div>
        <div>
            {
                place.tags.map(tag => <Label value={tag} />)
            }
        </div>
        <div>rating</div>
    </div>    

    <div>
        <div>Description</div>
        <div>equipements</div>
    </div>       
    </>
  )
}

export default Place