import CounterApp from "../CounterApp";
import {fireEvent, render, screen} from "@testing-library/react"

describe('Pruebas en <CounterApp />', () => {

    test('Debe de mostrar <CounterApp /> correctamente', () => {
        const view = render(<CounterApp />);

        expect(view).toMatchSnapshot();
    })

    test('Debe de mostrar <CounterApp /> el valor por defecto de 100', () => {
        render(<CounterApp value={100} />);

        const valor = screen.getByText(100).textContent;

        expect(valor).toEqual("100");
    })

    test('Debe incrementar con el boton +1', () => {
        render(<CounterApp valor={1} />);

        const button = screen.getByText("+1");
        fireEvent.click(button);
        const valor = screen.getByText(2).textContent;

        expect(valor).toBe("2");
    })


    test('Debe decrementar con el boton -1', () => {
        render(<CounterApp valor={1} />);

        const button = screen.getByText("-1");
        fireEvent.click(button);

        const valor = screen.getByText(0).textContent;
        expect(valor).toBe("0");
    })

    test('Debe reiniciar al valor inicial el boton reset', () => {
        render(<CounterApp valor={1} />);

        const buttonIncrease = screen.getByText("+1");
        const buttonReset = screen.getByText("Reset");
        fireEvent.click(buttonIncrease);
        fireEvent.click(buttonIncrease);
        fireEvent.click(buttonReset);

        const valor = screen.getByText(1).textContent;
        expect(valor).toBe("1");
    })
});