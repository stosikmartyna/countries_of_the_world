import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../Header/Header';
import { SearchCountry } from '../SearchCountry/SearchCountry';
import { CountriesTable } from '../CountriesTable/CountriesTable';
import { SelectRegion } from '../SelectRegion/SelectRegion';
import './CountriesList.css';

export const CountriesList = () => {
    const [countries, setCountries] = useState(undefined);
    const [filteredCountries, setFilteredCountries] = useState(undefined);
    const [showScroll, setShowScroll] = useState(false)

    const regions = countries?.map(country => country.region).filter((region, index, regions) => regions.indexOf(region) === index).filter(region => region !== '');

    const handleSelectChange = (event) => {
        filterCountriesByRegion(event.target.value);
    }

    const fetchCountryData = async () => {
        try {
            const response = await axios.get('https://restcountries.eu/rest/v2/all')
            setCountries(response.data)
            setFilteredCountries(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const filterCountriesByName = (searchValue) => {
        const filteredCountries = countries.filter(country => {
            const countryName = country.name.toUpperCase();
            const inputValue = searchValue.toUpperCase().trim();

            return countryName.startsWith(inputValue);
        });

        setFilteredCountries(filteredCountries);
    }

    const filterCountriesByRegion = (optionValue) => {
        const filteredCountries = countries.filter(country => country.region === optionValue);
        setFilteredCountries(filteredCountries);
    }

    useEffect(() => {
        fetchCountryData();
    }, []);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 200){
          setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 200){
          setShowScroll(false)
        }
      };
    
      const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      };
    
      window.addEventListener('scroll', checkScrollTop)


    return (
        <>
            <Header />
            <div className="filter-container"> 
                <SearchCountry filterCountries={filterCountriesByName} />  
                <SelectRegion onSelectChange={handleSelectChange} regions={regions} />
            </div>
            <CountriesTable filteredCountries={filteredCountries} />
            <button className="scrollTop" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}> 
                <img src="scrollTopButton.png"/>
            </button>
        </>
    )
}