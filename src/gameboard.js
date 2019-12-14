import React from 'react';

class Gameboard extends React.Component{
    constructor(){
        super()
        this.state ={
            squares: [" "," "," "," "," "," "," "," "," "],
            gameOver: false,
            gameOutcome: null,
            xLocation: null,
            oLocation: null,
        }
    }
    render() {
        let {squares} = this.state
        let square = square.map((value, index) => {
            return(
                <div class="square">
                    <Square
                        value = { value }
                        index = { index }
                        key
            )
        })
        return(
            <div>
                <h1>gamesougj</h1>
                {this.state.squares}

            </div>
        )
    }
}

export default Gameboard;
