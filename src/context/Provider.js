// src/context/Provider.js
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
    /* this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }; */

    const [cars, setCars] = useState({redCar: false, blueCar: false, yellowCar: false});


  const moveCar = (car, side) => {
    /*this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    })*/
    setCars({
      ...cars,
      [car]: side,
    })
  }
    /* const context = {
      ...this.state,
      moveCar: this.moveCar,
    }; */

    // const { children } = this.props;

    return (
      <CarsContext.Provider value={ { cars, moveCar } }>
        {children}
      </CarsContext.Provider>
    );

};

export default Provider;
