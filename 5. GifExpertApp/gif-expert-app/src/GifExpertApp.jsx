import { useState } from "react"
import { AddCategory,GifGrid } from "./components";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
    
    const onAddCategory = (category) => {
        if(!categories.includes(category)){
            setCategories([category, ...categories]);
        }
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                onNewCategory = {onAddCategory}
                // setCategories = {setCategories} 
            />
            
            {/* Listado de Gif */}
            {
                categories.map(category => <GifGrid key={category} category={category} /> )
            }
        </>
    )
}
