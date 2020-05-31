import React, {Component} from 'react';
import './App.css';
import Game from './Components/Game/Game';
import StartButton from './Components/StartButton/StartButton';
//import cardImages from './cardImages';



class App extends Component {
  

  
/*            
    
*/
  constructor(){
    super();
    const CARDS = [
      /* Diamonds */
      { name: '2 of Diamonds', value: 2, type: 'diamonds', src: './Images/2D.png'}, { name: '3 of Diamonds', value: 3, type: 'diamonds', src: './Images/3D.png'}, { name: '4 of Diamonds', value: 4, type: 'diamonds', src: './Images/4D.png'},
      { name: '5 of Diamonds', value: 5, type: 'diamonds', src: './Images/5D.png'}, { name: '6 of Diamonds', value: 6, type: 'diamonds', src: './Images/6D.png'}, { name: '7 of Diamonds', value: 7, type: 'diamonds', src: './Images/7D.png'},
      { name: '8 of Diamonds', value: 8, type: 'diamonds', src: './Images/8D.png'}, { name: '9 of Diamonds', value: 9, type: 'diamonds', src: './Images/9D.png'}, { name: '10 of Diamonds', value: 10, type: 'diamonds', src: './Images/10D.png'},
      { name: 'Jack of Diamonds', value: 11, type: 'diamonds', src: './Images/JD.png'}, { name: 'Queen of Diamonds', value: 12, type: 'diamonds', src: './Images/QD.png'}, { name: 'King of Diamonds', value: 13, type: 'diamonds', src: './Images/KD.png'},
      { name: 'Ace of Diamonds', value: 21, type: 'diamonds', src: './Images/AD.png'},
  
      /* Hearts */
      { name: '2 of Hearts', value: 2, type: 'Hearts', src: './Images/2H.png'}, { name: '3 of Hearts', value: 3, type: 'Hearts', src: './Images/3H.png'}, { name: '4 of Hearts', value: 4, type: 'Hearts', src: './Images/4H.png'},
      { name: '5 of Hearts', value: 5, type: 'Hearts', src: './Images/5H.png'}, { name: '6 of Hearts', value: 6, type: 'Hearts', src: './Images/6H.png'}, { name: '7 of Hearts', value: 7, type: 'Hearts', src: './Images/7H.png'},
      { name: '8 of Hearts', value: 8, type: 'Hearts', src: './Images/8H.png'}, { name: '9 of Hearts', value: 9, type: 'Hearts', src: './Images/9H.png'}, { name: '10 of Hearts', value: 10, type: 'Hearts', src: './Images/10H.png'},
      { name: 'Jack of Hearts', value: 11, type: 'Hearts', src: './Images/JH.png'}, { name: 'Queen of Hearts', value: 12, type: 'Hearts', src: './Images/QH.png'}, { name: 'King of Hearts', value: 13, type: 'Hearts', src: './Images/KH.png'},
      { name: 'Ace of Hearts', value: 21, type: 'Hearts', src: './Images/AH.png'},
  
      /* Spades */
      { name: '2 of Spades', value: 2, type: 'Spades', src: './Images/2S.png'}, { name: '3 of Spades', value: 3, type: 'Spades', src: './Images/3S.png'}, { name: '4 of Spades', value: 4, type: 'Spades', src: './Images/4S.png'},
      { name: '5 of Spades', value: 5, type: 'Spades', src: './Images/5S.png'}, { name: '6 of Spades', value: 6, type: 'Spades', src: './Images/6S.png'}, { name: '7 of Spades', value: 7, type: 'Spades', src: './Images/7S.png'},
      { name: '8 of Spades', value: 8, type: 'Spades', src: './Images/8S.png'}, { name: '9 of Spades', value: 9, type: 'Spades', src: './Images/9S.png'}, { name: '10 of Spades', value: 10, type: 'Spades', src: './Images/10S.png'},
      { name: 'Jack of Spades', value: 11, type: 'Spades', src: './Images/JS.png'}, {name: 'Queen of Spades', value: 12, type: 'Spades', src: './Images/QS.png'}, { name: 'King of Spades', value: 13, type: 'Spades', src: './Images/KS.png'},
      { name: 'Ace of Spades', value: 21, type: 'Spades', src: './Images/AS.png'},
  
  
      /* Clubs */
      { name: '2 of Clubs', value: 2, type: 'Clubs', src: './Images/2C.png'}, { name: '3 of Clubs', value: 3, type: 'Clubs', src: './Images/3C.png'}, { name: '4 of Clubs', value: 4, type: 'Clubs', src: './Images/4C.png'},
      { name: '5 of Clubs', value: 5, type: 'Clubs', src: './Images/5C.png'}, { name: '6 of Clubs', value: 6, type: 'Clubs', src: './Images/6C.png'},{ name: '7 of Clubs', value: 7, type: 'Clubs', src: './Images/7C.png'},
      { name: '8 of Clubs', value: 8, type: 'Clubs', src: './Images/8C.png'}, { name: '9 of Clubs', value: 9, type: 'Clubs', src: './Images/9C.png'}, { name: '10 of Clubs', value: 10, type: 'Clubs', src: './Images/10C.png'}, 
      { name: 'Jack of Clubs', value: 11, type: 'Clubs', src: './Images/JC.png'}, { name: 'Queen of Clubs', value: 12, type: 'Clubs', src: './Images/QC.png'}, { name: 'King of Clubs', value: 13, type: 'Clubs', src: './Images/KC.png'},
      { name: 'Ace of Clubs', value: 21, type: 'Clubs', src: './Images/AC.png'},
  
    ]
    
    let allCards;

    this.state = {    
      playerOne: {
        'wins': 0,
        'deck': [],
        'cardPlayed' : ''

      },
      computer: {
        'wins': 0,
        'deck': [],
        'cardPlayed' : '',
      },
      buttonValue: 'New Game',
      allCards : CARDS,
      isPlaying : false
      
    }
    
  }

  /*
  changeButtontoNewGame = (e) => {
      value = this.state.buttonValues[0];
      e.target.value = value;
      return value;
  }
  */

  endGame = () => {

  }

  changeButtonValue = () => {
    if (this.state.buttonValue === 'New Game'){
      this.setState({
        buttonValue: 'End Game',
        isPlaying: true
      })
      //console.log(this.state.isPlaying)
      //console.log(this.state.buttonValue)
    } 
    else {
      this.setState({
        buttonValue: 'New Game',
        isPlaying: false
      })
    }
    
    
}

  
  distributeCards = (allCards) => {
    console.log(this.state.isPlaying)
    console.log(this.state.buttonValue)
    if(this.state.isPlaying === true){
      let cards = this.shuffle(allCards);
      for (let i  = 0; i < cards.length; i++) {
          if (i % 2 === 0) {
              this.state.playerOne.deck.push(cards[i]);
          } else {
              this.state.computer.deck.push(cards[i]);
          }
      }
      this.setState(this.state);
    }
    console.log(this.state.playerOne.deck);
    
}


  shuffle = (allCards) => {
    let tempDeck = allCards;
    let newDeck = [];
    while (tempDeck.length !== 0){
      let randomIdx = Math.floor(Math.random() * (allCards.length));
      let currCard = tempDeck[randomIdx];
      newDeck.push(currCard);
      tempDeck.splice(randomIdx, 1);
    }
    allCards = newDeck;
    return allCards;
  }


  war = (playerCard, computerCard, playerOneCards, copmuterCards) => {
    //two of the same cards
    
  }

  

  
  render(){
    return(
      <div className="App">
          <StartButton 
          distributeCards = {this.distributeCards} 
          buttonValue = {this.state.buttonValue} 
          changeButtonValue = {this.changeButtonValue}
          allCards = {this.state.allCards} 
          />
        {this.state.isPlaying ? 
          <Game 
            playerOne = {this.state.playerOne} 
            computer = {this.state.computer}
            buttonValue = {this.state.buttonValue} 
            changeButtonValue = {this.changeButtonValue}
            allCards = {this.state.allCards}
            //isPlaying = {this.state.isPlaying} 
            />: 
          <div></div>
        }
           

      </div>
  
    )}
}

export default App;
