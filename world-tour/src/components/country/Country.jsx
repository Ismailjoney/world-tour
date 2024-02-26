import React, { useState } from 'react';
import './country.css'

const Country = ({ country, handdleYourVisitedCountry  }) => {

    // const [visited, setVisited] = useState(false)
    const { name, capital, flags, population, region } = country
    const [visited, setVisited] = useState(false)

    const handdleVisited = () => {
        setVisited(!visited)
    }



    return (
        <div style={{
            backgroundColor : visited && 'DarkRed'
        }} className='country'>
            <img src={flags?.png} alt="" />
            <h4>{name?.common}</h4>
            <p>Capital : {capital}</p>
            <p>Population : {population}</p>
            <p>Region : {region}</p>
            <button onClick={() => handdleYourVisitedCountry(country)}>Visited Country</button>
            <button onClick={handdleVisited}>Visited</button>
            <p>{visited && ` you visite ${name?.common}`}</p>
        </div>
    );
};

export default Country;