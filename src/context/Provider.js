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
      signal: {
        color: 'red',
      },
    }
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  } */
  const [cars, setCars] = useState({redCar: false, blueCar: false, yellowCar: false});
  const [signal, setSignal] = useState({color: 'red'})

  const  moveCar = (car, side) => {
    setCars({
        ...cars,
        [car]: side,
    });
  };

  const changeSignal = (signalColor) => {
    setSignal({ color: signalColor });
  };

    /* const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }; */

    // const { children } = this.props;

    return (
      <CarsContext.Provider value={ { cars, moveCar, signal, changeSignal } }>
        {children}
      </CarsContext.Provider>
    );
}

export default Provider;
