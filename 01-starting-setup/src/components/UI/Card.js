import React from "react";
import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className;   // This ensures that the className that we pass as props for this custom container are recognized.
    
    return <div className={classes}>{props.children}</div>   
}                                                       // children is a special prop that need not be passed and always points the content between the opening and closing tags.

export default Card;