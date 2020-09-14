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
        const { isBotNext, boxesValue } = this.state;
        if (isBotNext) {
            let nextMove = boxesValue.filter((i) => i.value === 'X');
            let pos = nextMove.length >= 2 ? this.bestmove() : this.botsmove();
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
                    winner: ''
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
        //for (let i = 0; i < rows.length; i++) 
        rows.forEach(row => {
            const [a, b, c] = row;

            // Check if the game board contains winning combination
            if (boxesValue[a].value !== '' && boxesValue[a].value === boxesValue[b].value && boxesValue[a].value === boxesValue[c].value) {
                // Return the winner ('x' or 'o')
                this.setState({
                    winner: boxesValue[a].value
                })
            } else if (this.getEmptyCells().length === 0) {
                this.setState({
                    winner: 'tie'
                })
            }
        })
    }

    /**
     * Function to make Bot's move when two or more cells are occupied
     */
    bestmove = () => {
        const { boxesValue } = this.state;
        let emptyBoxes = this.getEmptyCells();
        let nextMove = boxesValue.filter((i) => i.value === '0');
        let nexPos = '';
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


        rows.forEach((row, index) => {
            if (nextMove.length >= 2 && row.includes(nextMove[0].key) && row.includes(nextMove[1].key)) {
                nexPos = rows[index].filter(value => value !== nextMove[0].key && value !== nextMove[1].key)[0];
                if (!emptyBoxes.includes(nexPos)) {
                    nexPos = '';
                }
            }
        })

        if (nexPos === '') {
            nextMove = boxesValue.filter((i) => i.value === 'X');
            rows.forEach((row, index) => {
                if (row.includes(nextMove[0].key) && row.includes(nextMove[1].key)) {
                    nexPos = rows[index].filter(value => value !== nextMove[0].key && value !== nextMove[1].key)[0];
                    if (!emptyBoxes.includes(nexPos)) {
                        nexPos = '';
                    }
                }
            })
        }

        if (nexPos === '') {
            nexPos = this.botsmove();
        }
        return nexPos;
    }

    /**
     * function to get positions of empty cells
     */
    getEmptyCells = () => {
        const { boxesValue } = this.state;
        let emptyBoxes = [];

        boxesValue.forEach((cell, index) => {
            if (cell.key === '')
                emptyBoxes.push(index);
        });
        return emptyBoxes;
    }

    /**
     * function to make bot's move for random box cell
     */
    botsmove = () => {
        let emptyBoxes = this.getEmptyCells();
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