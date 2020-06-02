import React from 'react';
import '../views/stylesheet.css';

/**
 * View containing winner display elements
 * @param {winner} props 
 */
const WinnerView = (props) => {
    let content = props.winner === 'tie' ? <h1>Game tied</h1> : <h1>Winner is {props.winner}</h1>;
    return (<div id="winner" className="winner">
        {content}
    </div>);
}

export default WinnerView;