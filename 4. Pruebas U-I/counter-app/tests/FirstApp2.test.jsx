import {render, screen} from '@testing-library/react';
import {FirstApp} from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => { 
    const titulo = "No hay titulo";
    const subtitulo = "No hay subtitulo"
    test("Debe hacer match con el snapshot", () => {
        const {container} = render( <FirstApp /> );
        expect(container).toMatchSnapshot();
    })

    test("Debe mostrar el mensaje 'No hay titulo'", () => {
        render( <FirstApp /> );
        expect(screen.getByText(titulo)).toBeTruthy();
    })

    test("Debe mostrar el titulo en un h1", () => {
        render( <FirstApp /> );
        expect(screen.getByRole("heading", {level : 1}).innerHTML).toContain(titulo);
    })

    test("Debe mostrar el subtitulo 'No hay subtitulo'", () => {
        render( <FirstApp /> );
        expect(screen.getByText(subtitulo).innerHTML).toContain(subtitulo);
    })

})