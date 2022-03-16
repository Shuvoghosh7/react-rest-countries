import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h1>Visiting Every Countries in the world !!!</h1>
      <h3>Avaiable Country:{countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} Population={country.population}></Country>)
      }
    </div>
  )
}

function Country(props){
return(
  <div>
    <h3>Name: {props.name}</h3>
    <p>Population: {props.Population}</p>
  </div>
)
}


export default App;
