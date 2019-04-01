import React, { Component } from "react";
import "../styles/App.css";
import Form from "./Form";
import Footer from "./Footer";
import Navigation from './Navigation';
import Result from './Result';
import HomePage from './HomePage';
import ErrorPage from './ErrorPage';
import Forecast from './Forecast';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';

class App extends Component {
  state = {
    value: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false,
    icon: "",
    main: "",
    himidity: "",
    temp_min: "",
    temp_max: "",
    activeSubmit: false,
    fetchInProgress: false,
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
      activeSubmit: false,
    });
  };

  handleCitySubmit = e => {
    e.preventDefault();
    this.setState({ fetchInProgress: true });
    const API = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${this.state.value},id=524901&APPID=7e4e130100ba6d5091d438d72faf53c7&units=metric`;
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Error");
      })
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          city: prevState.value,
          value: "",
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          err: false,
          icon: data.weather[0].icon,
          main: data.weather[0].main,
          humidity: data.main.humidity,
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max,
          activeSubmit: true,
          fetchInProgress: false
        }));
      })
      .catch(err => {
        this.setState(prevState => ({
          err: true,
          city: prevState.value,
          value: "",
          fetchInProgress: false
        }));
      });
  };


  changeIcon = () => {
    switch (this.state.icon) {
      case "01d": return "sun";
      case "02d": return "cloud-sun";
      case "03d": return "cloud";
      case "04d": return "cloud";
      case "09d": return "cloud-rain";
      case "10d": return "cloud-showers-heavy";
      case "11d": return "poo-storm";
      case "13d": return "snowflake";
      case "50d": return "smog";
      case "01n": return "moon";
      case "02n": return "cloud";
      case "03n": return "cloud";
      case "04n": return "cloud";
      case "09n": return "cloud-rain";
      case "10n": return "cloud-showers-heavy";
      case "11n": return "poo-storm";
      case "13n": return "snowflake";
      case "50n": return "smog";
      default: return "cloud";
    }
  }

  render() {
    const { city, activeSubmit, err, value, fetchInProgress } = this.state;
    return (
      <Router basename="/weather-app/#">
        <div className="app">
          <div className="app__wrapper">
            <header className="header">

              <Form
                value={value}
                change={this.handleInputChange}
                submit={this.handleCitySubmit}
              />
              <Navigation />

            </header>
            <main>
              <section className="information">
                <Switch>
                  <Route path="/weather-app" exact render={() => (
                    !err ? <HomePage activeSubmit={activeSubmit} /> : <ErrorPage city={city} />)} />
                  <Route path="/today" render={() => (
                    city && !err ? <Result
                      weather={this.state}
                      changeIcon={this.changeIcon}
                    /> : <ErrorPage city={city} />)}
                  />
                  <Route path="/forecast" exact component={Forecast} />
                </Switch>
                {fetchInProgress && <div className="information__loader"><Loader
                  type="Grid"
                  color="orangered"
                  height={30}
                  width={30}
                />
                </div>}
              </section>
            </main>
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router >
    );
  }
}

export default App;
