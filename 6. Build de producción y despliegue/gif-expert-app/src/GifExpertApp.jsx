import { useState } from "react"
import { AddCategory, GifGrid } from "./components";
export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    
    const onAddCategory = (category) => {
        if(!categories.includes(category)){
            setCategories([category, ...categories]);
        }
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory = {onAddCategory}
            />
            
            {
                categories.map(category => <GifGrid key={category} category={category} /> )
            }
        </>
    )
}
