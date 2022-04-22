import React from "react";
import CounterApp from "../CounterApp";
import {render, screen} from "@testing-library/react"

describe('Pruebas en <CounterApp />', () => {

    test('Debe de mostrar <CounterApp /> correctamente', () => {
        const view = render(<CounterApp />);
        expect(view).toMatchSnapshot();
    })

    test('Debe de mostrar <CounterApp /> el valor por defecto de 100', () => {
        const value = 100;
        render(<CounterApp value={100} />);
        const valor = screen.getAllByText(value).innerHTML;
        console.log(valor);
    })
});