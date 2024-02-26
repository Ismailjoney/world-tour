import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [yourVisitedCountry, setYourVisitedCountry] = useState([])


    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handdleYourVisitedCountry = (country) => {
        let newVisitedCountry = [...yourVisitedCountry, country]
        setYourVisitedCountry(newVisitedCountry)

    }




    return (
        <div>
            <div>
                <h3>Your Visited Country</h3>
                <div>
                    {yourVisitedCountry.map(visitedCountry => <li key={visitedCountry.cca3}>  {visitedCountry?.name?.common}</li>)}
                </div>
            </div>
            <h2>All Countries Info</h2>
            <div className='countries'>
                {countries.map(country => <Country
                    country={country}
                    key={country.cca3}
                    handdleYourVisitedCountry={handdleYourVisitedCountry}
                ></Country>)}
            </div>
        </div>
    );
};

export default Countries;