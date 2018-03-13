import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress'
import Location from './Location';
import WeatherData from './WeatherData/index';
import transformWeather from '../../services/transformWeather'
import './styles.css'
//import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, THUNDER, DRIZZLE} from "./../../constant/weathers";

const api_key = 'f6b59f1cdca0aeae2a43de18d5cf0f5f';
const url = 'http://api.openweathermap.org/data/2.5/weather'

/* const data1 = {
  temperature: 32,
  weatherState: SUN,
  humidity: 2,
  wind: '10 m/s'
} */

class WeatherLocation extends Component {

  constructor ({ city }) {
    super();
    this.state = {
      city,
      data: null
    }
    //console.log('Constructor')
  }

  componentWillMount() {
    const { city } = this.state;
    const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;
    fetch(api_weather).then(data => {
      //console.log(data);
      return data.json();
    }).then(weather_data => {
      const data = transformWeather(weather_data);
      this.setState({ data });
    })
  }
  render = () => {
    const { onWeatherLocationClick } = this.props;
    const { city, data } = this.state;
    //console.log('Render')
    return (
      <div className="weatherLocation" onClick={onWeatherLocationClick}>
        <Location city = { city }/>
        {data !== null ? <WeatherData data = { data }/> : <CircularProgress size={60} thickness={7} />}
      </div>
    )
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;