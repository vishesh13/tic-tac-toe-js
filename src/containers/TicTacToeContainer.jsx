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
     * Using lifecycle method to get game's winner
     * 
     */
    // componentDidUpdate() {
    //     this.findWinner();
    // }

    /**
     * 
     * @param {index value of the game conatiner cell} index 
     */
    handleBoxClick(index) {
        const { boxesValue } = this.state;
        this.setState(prevState => {
            boxesValue[index] = { key: index, value: 'X' };
            if (!prevState.isBotNext) {
                this.findWinner();
                return {
                    isBotNext: true
                }
            }
            if (this.state.isBotNext) {
                this.setState(() => {
                    boxesValue[index] = { key: index, value: '0' };
                    this.findWinner();
                    return {
                        isBotNext: false
                    }
                })
            }

        })
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
            }
        }
    }

    /**
     * handler function to start game
     * 
     * @param {event} e 
     */
    handleStartClick(e) {
        if (e) {
            this.setState({
                toStartGame: true
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

    render() {
        return (
            <TicTacToeView winner={this.state.winner} toStartGame={this.state.toStartGame} handleStartClick={this.handleStartClick} handleRestartClick={this.handleRestartClick} handleBoxClick={this.handleBoxClick} boxesValue={this.state.boxesValue} />
        )
    }
}

export default TicTacToeContainer;

