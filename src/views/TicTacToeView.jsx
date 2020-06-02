import React from 'react';
import ButtonBox from './ButtonBox';
import WinnerView from '../views/WinnerView';
import '../views/stylesheet.css';

/**
 * Compoent containing view elelments
 * @param {states and handler functions} props 
 */
const TicTacToeView = props => {
    let buttonName = props.toStartGame || props.winner === 'tie' ? 'RESTART' : 'START';
    let content = (props.toStartGame ? (
        <div className="game-grid-container">
            <ButtonBox handleBoxClick={() => props.handleBoxClick(0)} boxesValue={props.boxesValue[0].value} />
            <ButtonBox handleBoxClick={() => props.handleBoxClick(1)} boxesValue={props.boxesValue[1].value} />
            <ButtonBox handleBoxClick={() => props.handleBoxClick(2)} boxesValue={props.boxesValue[2].value} />
            <ButtonBox handleBoxClick={() => props.handleBoxClick(3)} boxesValue={props.boxesValue[3].value} />
            <ButtonBox handleBoxClick={() => props.handleBoxClick(4)} boxesValue={props.boxesValue[4].value} />
            <ButtonBox handleBoxClick={() => props.handleBoxClick(5)} boxesValue={props.boxesValue[5].value} />
            <ButtonBox handleBoxClick={() => props.handleBoxClick(6)} boxesValue={props.boxesValue[6].value} />
            <ButtonBox handleBoxClick={() => props.handleBoxClick(7)} boxesValue={props.boxesValue[7].value} />
            <ButtonBox handleBoxClick={() => props.handleBoxClick(8)} boxesValue={props.boxesValue[8].value} />
        </div>
    ) : (props.winner !== '' ? <WinnerView winner={props.winner} /> : ''));
    return (
        <div>
            <button id="GAME_START_BUTTON" className="start-button" onClick={!props.toStartGame ? props.handleStartClick : props.handleRestartClick}>{buttonName}</button>
            <div style={{ "padding": "10%" }}>
                {content}
            </div >
        </div >
    );
}

export default TicTacToeView;