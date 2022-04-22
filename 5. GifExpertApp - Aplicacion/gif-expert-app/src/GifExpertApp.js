import React, { useState } from "react";
import { Fragment } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    /*
    const categories = ["One Punch", "Samurai X", "Dragon Ball"];
    const handleAdd = () => {
        setCategories([...categories, 'Invincible']);
    }
    */
    const [categories, setCategories] = useState([]);
    
    return(
        <Fragment>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
            <hr />
        
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category} 
                            category={category} 
                        />
                    ))
                    //return <li key={category}>{category}</li>
                }
            </ol>
        </Fragment>
    );
}