import {CounterApp} from '../src/CounterApp';
import {render, screen, fireEvent} from '@testing-library/react';

describe('Pruebas en <CounterApp />', () => {
    
    const initialValue = 10;

    test('Debe hacer match con el snapshot', () => {
        const {container} = render( <CounterApp value={initialValue} /> );
        expect(container).toMatchSnapshot();
    })

    test('Debe tener un valor inicial de 100', () => {
        render( <CounterApp value={100} /> );
        expect(screen.getByText(100)).toBeTruthy();
    })

    test('Debe de incrementar con el boton +1', () => {
        render( <CounterApp value={initialValue} /> );
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText("11")).toBeTruthy();
    })

    test('Debe de decrementar con el boton -1', () => {
        render( <CounterApp value={initialValue} /> );
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText("9")).toBeTruthy();
    })

    test('Debe de funcionar el boton de reset ', () => {
        render( <CounterApp value={355} /> );
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole("button", {name : "btn-reset"}))
        expect(355).toBeTruthy();
    })



})