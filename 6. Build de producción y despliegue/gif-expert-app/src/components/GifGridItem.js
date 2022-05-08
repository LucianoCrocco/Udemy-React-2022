import React from "react";

export const GifGridItem = ({title, url}) => {
    return (
        <article className="card animate__animated animate__pulse">
            <img src={url} alt = {title}></img>
            <p>{title}</p>
        </article>
    )
}