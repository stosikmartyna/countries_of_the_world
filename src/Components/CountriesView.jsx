import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CountriesView = () => {
  const [countryData, setCountryData] = useState([]);

  const fetchCountryData = async() => {   
    try {
        const response = await axios.get('https://restcountries.eu/rest/v2/all')
        setCountryData(response.data)
    } catch (error) {
        console.error(error)
    } 
  }

  useEffect(() => {
    fetchCountryData();
}, []);

  return (
    <>
      {countryData.map(country => <li>{country.name}</li>)}
    </>
  ); 
}