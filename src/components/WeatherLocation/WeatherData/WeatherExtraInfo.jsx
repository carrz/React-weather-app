import React from 'react';
import PropTypes from 'prop-types';


const WeatherExtraInfo = ({humidity, wind}) => (
  <div>
    <span>{`Humidity: ${humidity} % | `}</span>
    <span>{`Wind: ${wind}`}</span>
  </div>
)

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;