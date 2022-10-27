import React from 'react'
import Banner from '../Components/Banner'
import Image from '../assets/banners/banner-home.png'
import { NavLink } from 'react-router-dom';
import Card from '../Components/Card';
import places from '../api/logements.json'

const Home = () => {

    return (
        <>
            <Banner image={Image} text="Chez vous, partousez dans mon cul" alt="Coucou" />
            <section class="cards-grid">
            {
                places.map(place =>  (
                    <NavLink to={"/place/" + place.id}>
                        <Card picture={place.cover} title={place.title}/>
                    </NavLink>
                ))
            }
            </section>
        </>
    )
}

export default Home