import { Fragment } from "react";
import PropTypes from "prop-types";

export const FirstApp = ( {title, subTitle, name} ) => {
    return (<Fragment>
    
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <p>{name}</p>
   
    </Fragment>);
}

FirstApp.propTypes = {
    title : PropTypes.string.isRequired,
    subTitle : PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    name : "Luciano Crocco",
    subTitle : "No hay subtitulo",
    title : "No hay titulo"
}