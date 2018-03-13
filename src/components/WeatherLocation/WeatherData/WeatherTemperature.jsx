import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import {CLOUDY, SUN, RAIN, SNOW, WINDY, THUNDER, DRIZZLE} from "../../../constant/weathers";

const StateToIconName = (weatherState) => {
  switch (weatherState) {
    case CLOUDY:
      return 'cloudy';
    case SUN:
      return 'day-sunny';
    case RAIN:
      return 'rain';
    case SNOW:
      return 'snow';
    case WINDY:
      return 'windy';
    case THUNDER:
      return 'day-thunderstorm';
    case DRIZZLE:
      return 'day-showers';
    default:
      return 'day-sunny';
  }
}

const getWeatherIcon = (weatherState) => {
  return(
    <WeatherIcons name = {StateToIconName(weatherState)} size = '2x'/>
  );
}

const WeatherTemperature = ({temperature, weatherState}) => (
  <div>
    {getWeatherIcon(weatherState)}
    <span>{` ${temperature}° C`}</span>
  </div>
)

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;