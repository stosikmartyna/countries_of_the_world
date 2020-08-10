import React from 'react';
import './SelectRegion.css';

export const SelectRegion = ({onSelectChange, regions}) => {
    return (
        <select onChange={onSelectChange}>
            <option value="">Choose region</option>
            {regions?.map(region => (
                <option value={region} key={region}>
                    {region}
                </option>
            ))}
        </select>
    )
}