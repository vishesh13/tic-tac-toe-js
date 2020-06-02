import React from 'react';
import TicTacToeView from '../views/TicTacToeView';

/**
 * Container class conatining game's state handler methods
 */
class TicTacToeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleStartClick = this.handleStartClick.bind(this);
        this.handleRestartClick = this.handleRestartClick.bind(this);
        this.handleBoxClick = this.handleBoxClick.bind(this);
        this.findWinner = this.findWinner.bind(this);

        this.state = {
            boxesValue: Array(9).fill({ key: '', value: '' }),
            toStartGame: false,
            isBotNext: false,
            winner: ''
        }
    }

    /**
     * Using lifecycle method to trigger bot's mvoement
     */
    componentDidUpdate() {
        if (this.state.isBotNext) {
            const { boxesValue } = this.state;
            let pos = boxesValue.filter((i) => i.key === 'X').length >= 2 ? this.bestmove() : this.botsmove();
            boxesValue[pos] = { key: pos, value: '0' };
            this.findWinner();
            this.setState({
                isBotNext: false
            })
        }
    }

    /**
     * 
     * @param {index value of the game conatiner cell} index 
     */
    handleBoxClick(index) {
        const { boxesValue } = this.state;
        this.setState(prevState => {
            if (!prevState.isBotNext) {
                boxesValue[index] = { key: index, value: 'X' };
                return {
                    isBotNext: true
                }
            }
        })
    }

    /**
     * handler function to start game
     * 
     * @param {event} e 
     */
    handleStartClick(e) {
        if (e) {
            this.setState({
                boxesValue: Array(9).fill({ key: '', value: '' }),
                toStartGame: true,
                isBotNext: false,
                winner: ''
            })
        }
    }

    /**
     * handler function to reset game stats state
     * 
     * @param {event} e 
     */
    handleRestartClick(e) {
        if (e) {
            this.setState(() => {
                return {
                    boxesValue: Array(9).fill({ key: '', value: '' }),
                    toStartGame: true,
                    isBotNext: false,
                    value: ''
                }
            })
        }
    }

    /**
     * method to find game's winner
     */
    findWinner() {
        const { boxesValue } = this.state;

        // Array with winning combinations
        const rows = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        // Iterate over array with winning combinations
        for (let i = 0; i < rows.length; i++) {
            const [a, b, c] = rows[i]

            // Check if the game board contains winning combination
            if (boxesValue[a].value !== '' && boxesValue[a].value === boxesValue[b].value && boxesValue[a].value === boxesValue[c].value) {
                // Return the winner ('x' or 'o')
                this.setState({
                    toStartGame: false,
                    winner: boxesValue[a].value
                })
                // return boxesValue[a].value
            } else if (this.getEmptyCells().length === 0) {
                this.setState({
                    toStartGame: false,
                    winner: 'tie'
                })
            }
        }
    }

    /**
     * Function to make Bot's move when two or more cells are occupied
     */
    bestmove = () => {
        const rows = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        // Iterate over array with winning combinations
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].filter((i) => i === '0').length === 2) {
                return rows[i].findIndex(element => element === '');
            }
        }
    }

    /**
     * function to get positions of empty cells
     */
    getEmptyCells = () => {
        const { boxesValue } = this.state;
        let emptyBoxes = [];
        for (let i = 0; i < boxesValue.length; i++) {
            if (boxesValue[i].key === '') {
                emptyBoxes.push(i);
            }
        }
        return emptyBoxes;
    }

    /**
     * function to make bot's move for random box cell
     */
    botsmove = () => {
        const { boxesValue } = this.state;
        let emptyBoxes = this.getEmptyCells();
        for (let i = 0; i < boxesValue.length; i++) {
            if (boxesValue[i].key === '') {
                emptyBoxes.push(i);
            }
        }
        let value = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
        return value;
    }

    render() {
        return (
            <TicTacToeView winner={this.state.winner} toStartGame={this.state.toStartGame} handleStartClick={this.handleStartClick} handleRestartClick={this.handleRestartClick} handleBoxClick={this.handleBoxClick} boxesValue={this.state.boxesValue} />
        )
    }
}

export default TicTacToeContainer;

