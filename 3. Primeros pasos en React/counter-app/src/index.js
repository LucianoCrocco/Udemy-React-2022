import React from 'react';
import { createRoot } from 'react-dom/client';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';


const divRoot = document.querySelector("#root");
const root = createRoot(divRoot);

root.render(<CounterApp value={5} />);

//root.render(<PrimeraApp saludo="Hola Mundo"/>);