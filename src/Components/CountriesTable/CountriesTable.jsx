import React from 'react';
import './CountriesTable.css';

export const CountriesTable = ({filteredCountries, sortBy}) => {
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
                    <th>Area (km²)</th>
                </tr>
            </thead>
            <tbody>
                {filteredCountries?.map(country => {
                    return (
                        <tr key={country.name}>
                            <td className={'flag-cell'}>
                                <img src={country.flag} alt='flag' />
                            </td>
                            <td>{country.name}</td>
                            <td>{country.nativeName}</td>
                            <td>{country.capital}</td>
                            <td>{country.region}</td>
                            <td>{country.subregion}</td>
                            <td className={'amount-cell'}>{country.population}</td>
                            <td className={'amount-cell'}>{country.area}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}