import React from 'react';
import ButtonBox from './ButtonBox';
import '../views/stylesheet.css';

const TicTacToeView = props => {
    return (
        <div>
            <button id="GAME_START_BUTTON" className="start-button" onClick={props.handleStartClick}>START</button>
            <div style={{ "padding": "10%" }}>
                <div className="game-grid-container">
                    <ButtonBox bot={props.bot} player={props.player} handleBoxClick={() => props.handleBoxClick(0)} boxesValue={props.boxesValue[0].key} />
                    <ButtonBox bot={props.bot} player={props.player} handleBoxClick={() => props.handleBoxClick(1)} boxesValue={props.boxesValue[1].key} />
                    <ButtonBox bot={props.bot} player={props.player} handleBoxClick={() => props.handleBoxClick(2)} boxesValue={props.boxesValue[2].key} />
                    <ButtonBox bot={props.bot} player={props.player} handleBoxClick={() => props.handleBoxClick(3)} boxesValue={props.boxesValue[3].key} />
                    <ButtonBox bot={props.bot} player={props.player} handleBoxClick={() => props.handleBoxClick(4)} boxesValue={props.boxesValue[4].key} />
                    <ButtonBox bot={props.bot} player={props.player} handleBoxClick={() => props.handleBoxClick(5)} boxesValue={props.boxesValue[5].key} />
                    <ButtonBox bot={props.bot} player={props.player} handleBoxClick={() => props.handleBoxClick(6)} boxesValue={props.boxesValue[6].key} />
                    <ButtonBox bot={props.bot} player={props.player} handleBoxClick={() => props.handleBoxClick(7)} boxesValue={props.boxesValue[7].key} />
                    <ButtonBox bot={props.bot} player={props.player} handleBoxClick={() => props.handleBoxClick(8)} boxesValue={props.boxesValue[8].key} />
                </div>
            </div >
        </div>
    );
}

export default TicTacToeView;