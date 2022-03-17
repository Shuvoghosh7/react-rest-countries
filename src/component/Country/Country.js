import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props)
    const{region,capital,population,name,flags}=props.country
    return (
        // using destructuring 
        <div className='country'>
            <h1>Country Name:{name.common}</h1>
            <img src={flags.png} alt="" />
            <h3>Country population:{population}</h3>
            <h3>capital:{capital}</h3>
            <h3>region:{region}</h3>
           
            {/* <h1>Country Name:{props.country.name.common}</h1>
            <h3>Country population:{props.country.population}</h3>
            <h3>capital:{props.country.capital}</h3>
            <h3>region:{props.country.region}</h3> */}
        </div>
    );
};

export default Country;