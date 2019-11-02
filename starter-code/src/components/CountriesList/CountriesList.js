import React from 'react';
import { Link } from 'react-router-dom';
import './CountriesList.css';

const CountriesList = (props) => {

  const listCountries = () => {
    const { countries } = props;

    return countries.map((country) => {
      return (
        <Link key={country.cca3} to={`/${country.cca3}`} className="list-group-item list-group-item-action">
        {country.flag} {country.name.official}
        </Link>
      );
    });
  }

  return (
    <div className="col-5 country-list">
      <div className="list-group">
        {listCountries()}
      </div>
    </div>
  );
}

export default CountriesList;
