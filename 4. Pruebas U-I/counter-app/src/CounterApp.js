import React, {useState} from "react";
import { Fragment } from "react";
import PropTypes from 'prop-types';


const CounterApp = ( {value} ) => {

    const [counter, setCounter] = useState(value);

    //Al re renderizar me permite volver a generar el componente y cambiar el valor de la constante.

    const handleAdd = () => {
        //setCounter(counter + 1);
        setCounter((c) => c+1);
    };

    const handleSubtract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>-1</button>
        </Fragment>
    );
}


CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value : 1
}


export default CounterApp;