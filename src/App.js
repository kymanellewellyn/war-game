import React, {Component} from 'react';
import './App.css';
import Game from './Components/Game/Game';
class App extends Component {
  

  
/*            
    
*/
  constructor(){
    super();
    const CARDS = [
      /* Diamonds */
      { name: '2 of Diamonds', value: 2, type: 'diamonds'}, { name: '3 of Diamonds', value: 3, type: 'diamonds'}, { name: '4 of Diamonds', value: 4, type: 'diamonds'},
      { name: '5 of Diamonds', value: 5, type: 'diamonds'}, { name: '6 of Diamonds', value: 6, type: 'diamonds'}, { name: '7 of Diamonds', value: 7, type: 'diamonds'},
      { name: '8 of Diamonds', value: 8, type: 'diamonds'}, { name: '9 of Diamonds', value: 9, type: 'diamonds'}, { name: '10 of Diamonds', value: 10, type: 'diamonds'},
      { name: 'Jack of Diamonds', value: 11, type: 'diamonds'}, { name: 'Queen of Diamonds', value: 12, type: 'diamonds'}, { name: 'King of Diamonds', value: 13, type: 'diamonds'},
      { name: 'Ace of Diamonds', value: 21, type: 'diamonds'},
  
      /* Hearts */
      { name: '2 of Hearts', value: 2, type: 'Hearts'}, { name: '3 of Hearts', value: 3, type: 'Hearts'}, { name: '4 of Hearts', value: 4, type: 'Hearts'},
      { name: '5 of Hearts', value: 5, type: 'Hearts'}, { name: '6 of Hearts', value: 6, type: 'Hearts'}, { name: '7 of Hearts', value: 7, type: 'Hearts'},
      { name: '8 of Hearts', value: 8, type: 'Hearts'}, { name: '9 of Hearts', value: 9, type: 'Hearts'}, { name: '10 of Hearts', value: 10, type: 'Hearts'},
      { name: 'Jack of Hearts', value: 11, type: 'Hearts'}, { name: 'Queen of Hearts', value: 12, type: 'Hearts'}, { name: 'King of Hearts', value: 13, type: 'Hearts'},
      { name: 'Ace of Hearts', value: 21, type: 'Hearts'},
  
      /* Spades */
      { name: '2 of Spades', value: 2, type: 'Spades'}, { name: '3 of Spades', value: 3, type: 'Spades'}, { name: '4 of Spades', value: 4, type: 'Spades'},
      { name: '5 of Spades', value: 5, type: 'Spades'}, { name: '6 of Spades', value: 6, type: 'Spades'}, { name: '7 of Spades', value: 7, type: 'Spades'},
      { name: '8 of Spades', value: 8, type: 'Spades'}, { name: '9 of Spades', value: 9, type: 'Spades'}, { name: '10 of Spades', value: 10, type: 'Spades'},
      { name: 'Jack of Spades', value: 11, type: 'Spades'}, {name: 'Queen of Spades', value: 12, type: 'Spades'}, { name: 'King of Spades', value: 13, type: 'Spades'},
      { name: 'Ace of Spades', value: 21, type: 'Spades'},
  
  
      /* Clubs */
      { name: '2 of Clubs', value: 2, type: 'Clubs'}, { name: '3 of Clubs', value: 3, type: 'Clubs'}, { name: '4 of Clubs', value: 4, type: 'Clubs'},
      { name: '5 of Clubs', value: 5, type: 'Clubs'}, { name: '6 of Clubs', value: 6, type: 'Clubs'},{ name: '7 of Clubs', value: 7, type: 'Clubs'},
      { name: '8 of Clubs', value: 8, type: 'Clubs'}, { name: '9 of Clubs', value: 9, type: 'Clubs'}, { name: '10 of Clubs', value: 10, type: 'Clubs'}, 
      { name: 'Jack of Clubs', value: 11, type: 'Clubs'}, { name: 'Queen of Clubs', value: 12, type: 'Clubs'}, { name: 'King of Clubs', value: 13, type: 'Clubs'},
      { name: 'Ace of Clubs', value: 21, type: 'Clubs'},
  
    ]
    
    let allCards;

    this.state = {    
      playerOne: {
        'wins': 0,
        'cards': [],
        'cardPlayed' : ''
      },
      computer: {
        'wins': 0,
        'cards' : [],
        'cardPlayed' : '',
      },
      allCards : CARDS,
      startGame : false
    }
    
  }

  
  
  
  distributeCards = (allCards) => {
    console.log(allCards)
    let deck = this.shuffle(allCards);
    for (let i  = 0; i < deck.length; i++) {
        if (i % 2 === 0) {
            this.state.playerOne.cards.push(deck[i]);
        } else {
            this.state.computer.cards.push(deck[i]);
        }
    }
    this.state.startGame = true
    this.setState(this.state);
}


  shuffle = (allCards) => {
    let tempDeck = allCards;
    let newDeck = [];
    console.log(tempDeck);
    while (tempDeck.length !== 0){
      let randomIdx = Math.floor(Math.random() * (allCards.length));
      let currCard = tempDeck[randomIdx];
      newDeck.push(currCard);
      tempDeck = tempDeck.splice(randomIdx, 1);
    }
    allCards = newDeck;
  }


  war = (playerCard, computerCard, playerOneCards, copmuterCards) => {
    //two of the same cards
    
  }

  

  
  render(){
    return(
      <div className="App">
          <button onClick={(e) => {this.distributeCards(this.state.allCards)}}>New Game</button>
          {this.state.startGame ? 
            <Game 
            playerOne = {this.state.playerOne} 
            computer = {this.state.computer} 
            /> : null}     
      </div>
  
    )}
}

export default App;
