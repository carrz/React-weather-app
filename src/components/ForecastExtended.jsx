import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/index';
import transformForecast from '../services/transformForecast'

/* const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const data = {
  temperature: 30,
  humidity: 10,
  weatherState: 'normal',
  wind: 'normal'
} */

const api_key = 'f6b59f1cdca0aeae2a43de18d5cf0f5f';
const url = 'http://api.openweathermap.org/data/2.5/forecast'

class ForecastExtended extends Component {

  constructor() {
    super();
    this.state = {
      forecastData: null
    }
  }

  componentDidMount() {
    this.updateCity(this.props.city);
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.city !== this.props.city) {
      this.setState({
        forecastData: null,
      })
      this.updateCity(nextProps.city)
    }
  }

  updateCity = (city) => {
    const url_forecast = `${url}?q=${city}&appid=${api_key}&units=metric`;
    fetch(url_forecast).then(data => (data.json())
  ).then(weather_data => {
    const forecastData = transformForecast(weather_data);
    // console.log(forecastData);
    this.setState({forecastData});
  })
  }
  renderForecastItemDays(forecastData) {
    return forecastData.map(forecast => (
      <ForecastItem key = {`${forecast.weekDay}${forecast.hour}`} weekDay = {forecast.weekDay} hour = {forecast.hour} data={forecast.data}>
      </ForecastItem>        
    ))
    // return days.map(day => (<ForecastItem weekDay={day} hour = {10} key={day} data={data} ></ForecastItem>))
  }
  renderProgress = () => {
    return (<h3>Looking for the forecast extended...</h3>)
  }
  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className='forecastTitle'>Forecast extended for {city}</h2>
        {forecastData != null ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;