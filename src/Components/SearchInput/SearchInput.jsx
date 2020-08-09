import React, { useState } from 'react';
import './searchInput.css';

export const SearchInput = ({filterCountries}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        filterCountries(event.target.value);
    }

    return (
        <input onChange={handleInputChange} value={inputValue} placeholder="Search country by name" />
    )
}