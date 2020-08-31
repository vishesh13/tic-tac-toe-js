import React from 'react';
import '../views/stylesheet.css';

/**
 * View containing winner display elements
 * @param {winner} props 
 */
const WinnerView = (props) => {
    let content = props.winner === 'tie' ? 'Game tied' : `Winner is ${props.winner}`;
    return (
    //<span id="winner" className="winner">
        content
    //</span>
    );
}

export default WinnerView;