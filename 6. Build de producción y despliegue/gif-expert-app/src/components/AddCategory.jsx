import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();

        if(newInputValue.length < 2) return;

        onNewCategory(newInputValue);
        setInputValue("");

    }
 
    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text" placeholder="Buscar gifs" onChange={onInputChange} value={inputValue} />
        </form>
    )
}
