import React from 'react'
import { useState } from "react";
import "./counter.css"

export const CounterApp = () => {

  const [counter, setCounter] = useState({counter1: 10, counter2: 20})

  const {counter1, counter2} = counter;

  const handleAdd = () => {
    setCounter({...counter, counter1: counter1 + 1});
  }

  return (
    <>
        <h1>Counter1 {counter1} </h1>
        <h1>Counter2 {counter2} </h1>
        <hr />
        <button className='btn btn-primary' onClick={handleAdd}>
            +1
        </button>
    </>
  )
}
