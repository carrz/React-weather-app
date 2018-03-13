import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../actions';
import LocationList from '../components/LocationList';

class LocationListContainer extends Component {
  handleSelectionLocation = (city) => {
    this.props.setCity(city);
  }

  render() {
    return(
      <div>
          <LocationList cities= { this.props.cities } onSelectedLocation = {this.handleSelectionLocation}></LocationList>
      </div>
    )
  }
}

const mapDispatchToPropsActions = (dispatch) => ({
  setCity: value => dispatch(actionCreator(value))
});

export default connect(null,mapDispatchToPropsActions)(LocationListContainer);

