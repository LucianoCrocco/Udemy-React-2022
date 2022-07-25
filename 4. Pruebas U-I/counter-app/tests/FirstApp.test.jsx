import {render} from '@testing-library/react'
import {FirstApp} from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => { 
    test("Debe hacer match con el snapshot", () => {
        const {container} = render( <FirstApp /> );
        expect(container).toMatchSnapshot();
    })

    test("Debe existir el titulo", () => {
        const titulo = "No hay titulo";
        const {container, getByText} = render( <FirstApp /> );
        expect(container).toMatchSnapshot();
        expect(getByText(titulo)).toBeTruthy();
    })

    test("Debe de mostrar el titulo en un h1", () => {
        const titulo = "No hay titulo";
        const {container, getByText} = render( <FirstApp /> );
        expect(container).toMatchSnapshot();
        expect(getByText(titulo)).toBeTruthy();
    })
})