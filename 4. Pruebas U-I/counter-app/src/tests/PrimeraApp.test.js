import React from "react";
import PrimeraApp from "../PrimeraApp";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import "@testing-library/dom"

describe('Pruebas en <PrimeraApp />', () => {
    
    test('Debe mostrar el mensaje "Hola, Soy Goku"', () => {
        const saludo = "Hola, Soy Goku";
        render(<PrimeraApp saludo={saludo} />);
        expect(screen.getByText(saludo)).toBeInTheDocument();
    })

    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, Soy Goku';
        const view = render(<PrimeraApp saludo={saludo} />);
        expect(view).toMatchSnapshot();
    })

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, Soy Goku';
        const subtitulo = "Soy un subtitulo";
        render(
        <PrimeraApp 
            saludo={saludo}
            subtitulo={subtitulo} 
        />);
        const textParrafo = screen.getByText(subtitulo).textContent;
        expect(textParrafo).toBe(subtitulo);
    });

 })