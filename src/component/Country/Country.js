import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        
        <div className='country'>
            
            <h1>Country Name:{props.name}</h1>
            <h3>Country population:{props.population}</h3>
            <h3>capital:{props.capital}</h3>
        </div>
    );
};

export default Country;