import React from 'react'
import './Game.css'
import Button from 'react-bootstrap/Button'
import DeckBack from './gray_back.png'


const game = (props) => {
    //console.log(props.playerOne)
    return ( 
            <div class="game">
                <div class="players">
                    <div class= "playerOne"><h2>Player One</h2></div>
                    <div class= "CPU"><h2>CPU</h2></div>
                </div>

                <div class="drawCards">
                    <div class="playerCard"><img src={DeckBack} /></div>
                    <div>
                    <Button 
                    variant="success"
                    size="sm">Play
                    </Button>
                    </div>
                    <div class="playerCard"><img src={DeckBack} /></div>
                </div>

                <div class="cardsToWin">
                    <div class="playerOneCardsToWin"><p>Cards to Win: {props.playerOne.deck.length} </p></div>
                    <div class="ComputerCardsToWin"><p>Cards to Win: 26</p></div>
                </div>
            </div>
            )
    
}


export default game
