import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../Header/Header';
import { SearchInput } from '../SearchInput/SearchInput';
import './CountriesList.css';

export const CountriesList = () => {
    const [countries, setCountries] = useState(undefined);
    const [filteredCountries, setFilteredCountries] = useState(undefined);

    const fetchCountryData = async () => {
        try {
            const response = await axios.get('https://restcountries.eu/rest/v2/all')
            setCountries(response.data)
            setFilteredCountries(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const filterCountries = (searchValue) => {
        const filteredCountries = countries.filter(country => {
            const countryName = country.name.toUpperCase();
            const inputValue = searchValue.toUpperCase().trim();

            return countryName.startsWith(inputValue);
        });

        setFilteredCountries(filteredCountries);
    }

    useEffect(() => {
        fetchCountryData();
    }, []);

    return (
        <>
            <Header />
            <SearchInput filterCountries={filterCountries} />
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
                    {filteredCountries?.map(country => {
                        return (
                            <tr key={country.name}>
                                <td><img src={country.flag} alt='flag' /></td>
                                <td>{country.name}</td>
                                <td>{country.nativeName}</td>
                                <td>{country.capital}</td>
                                <td>{country.region}</td>
                                <td>{country.subregion}</td>
                                <td>{country.population}</td>
                                <td>{country.area}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}