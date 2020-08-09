import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../Header/Header';
import { SearchInput } from '../SearchInput/SearchInput';
import { CountriesTable } from '../CountriesTable/CountriesTable';

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
            <CountriesTable filteredCountries={filteredCountries} />
        </>
    )
}