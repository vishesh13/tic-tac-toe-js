import React from 'react';
import '../views/stylesheet.css';

const ButtonBox = (props) => {
    return (
        <button className="game-grid-item" onClick={props.handleBoxClick}>{props.boxesValue}</button>
    )
}

export default ButtonBox;