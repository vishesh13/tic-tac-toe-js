import React from 'react';
import TicTacToeView from '../views/TicTacToeView';

class TicTacToeContainer extends React.Component {
    constructor(props) {
        super(props);
        // this.handleStartClick = this.handleStartClick.bind(this);
        this.handleBoxClick = this.handleBoxClick.bind(this);

        this.state = {
            boxesValue: Array(9).fill({ key: '', value: '' }),
            player: {
                active: false,
                value: '0',
                isNext: false,
                boxes: [],
                winner: false
            },
            bot: {
                active: false,
                value: 'X',
                isNext: false,
                boxes: [],
                winner: false
            }
        }
    }

    handleBoxClick(index) {
        const { boxesValue } = this.state;
        this.setState(prevState => {
            if (prevState.player.active) {
                boxesValue[index] = { key: prevState.player.value, value: index };
                return {
                    boxesValue: boxesValue,
                    player: {
                        ...prevState.player.boxes,
                        active: false,
                        isNext: false
                        // boxes: prevState.player.boxes.push(index)
                    },
                    bot: {
                        ...prevState.bot,
                        active: true,
                        isNext: true,
                    }
                }
            }
            else {
                boxesValue[index] = { key: prevState.bot.value, value: index };
                return {

                    player: {
                        ...prevState.player,
                        active: true,
                        isNext: true
                    },
                    bot: {
                        ...prevState.bot,
                        active: false,
                        isNext: false
                        // boxes: prevState.player.boxes.push(index)
                    }
                }
            }
        })
    }

    // handleStartClick(e) {
    //     if (e) {
    //         this.setState(prevState => {
    //             return {
    //                 player: {
    //                     ...prevState.player,
    //                     active: true,
    //                     isNext: true
    //                 },
    //                 bot: {
    //                     ...prevState.bot,
    //                     active: false,
    //                     isNext: false
    //                 }
    //             }
    //         })
    //     }
    // }

    render() {
        return (
            <TicTacToeView bot={this.state.bot} player={this.state.player} handleBoxClick={this.handleBoxClick} boxesValue={this.state.boxesValue} />
        )
    }
}

export default TicTacToeContainer;

