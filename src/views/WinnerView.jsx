import React from 'react';
import '../views/stylesheet.css';

/**
 * View containing winner display elements
 * @param {winner} props 
 */
const WinnerView = (props) => {
    return (<div id="winner" className="winner">
        <h1>Winner is {props.winner}</h1>
    </div>);
}

export default WinnerView;