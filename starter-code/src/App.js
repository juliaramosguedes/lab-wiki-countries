import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetail from './components/pages/CountryDetail/CountryDetail';
import countries from './countries.json';

class App extends Component {
  state = {
    countries: [],
  }

  componentDidMount() {
    this.setState({countries})
  }

  render() {
    const { countries } = this.state;

    return countries.length > 0 ? (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
          <Link to="/" className="navbar-brand">WikiCountries</Link>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Switch>
    <Route exact path="/:cca3" render={(props) => <CountryDetail {...props} countries={countries} />} />
            </Switch>
          </div>
        </div>
      </div>
    ) : (
      <p>Carregando</p>
    );
  }
}

export default App;
