import React from 'react';
import '../views/stylesheet.css';

/**
 * Button cell of game container
 * @param {handler funtions and states} props 
 */
const ButtonBox = (props) => {
    return (
        <button className="game-grid-item" onClick={props.handleBoxClick}>{props.boxesValue}</button>
    )
}

export default ButtonBox;