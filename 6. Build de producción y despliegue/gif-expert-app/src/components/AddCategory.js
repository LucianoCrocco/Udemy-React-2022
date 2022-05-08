import React, {useState} from "react";
import PropTypes from "prop-types"

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState("");

    const handleInputChange = (e) => {
        if(e.target !== undefined){
            setinputValue(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(elemnts => [inputValue, ...elemnts]);
            setinputValue("");
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>{inputValue}</h1>
            <input 
                type={"text"} 
                name={"nombre-categoria"} 
                value={inputValue}
                onChange= {handleInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}