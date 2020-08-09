import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './countriesView.css';

export const CountriesView = () => {
    const [countries, setCountries] = useState(undefined);

    const fetchCountryData = async () => {
        try {
            const response = await axios.get('https://restcountries.eu/rest/v2/all')
            setCountries(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchCountryData();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Flag</th>
                    <th>Country Name</th>
                    <th>Native Name</th>
                    <th>Capital</th>
                    <th>Region</th>
                    <th>Subregion</th>
                    <th>Population</th>
                    <th>Area</th>
                </tr>
            </thead>
            <tbody>
                {countries?.map(country => {
                        return (
                            <tr>
                                <td><img src={country.flag} alt='flag'/></td>
                                <td>{country.name}</td>
                                <td>{country.nativeName}</td>
                                <td>{country.capital}</td>
                                <td>{country.region}</td>
                                <td>{country.subregion}</td>
                                <td>{country.population}</td>
                                <td>{country.area}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )}