import React from 'react'
import './StartButton.css'
//import DeckBack from './gray_back.png'
import Button from 'react-bootstrap/Button';

const startButton = (props) => {
    return (
        <div class="start">
          <div class="startButton">
            <Button
            variant="primary" 
            size="lg"
            onClick={() => {props.changeButtonValue(); props.distributeCards(props.allCards)}}   
            >
              {props.buttonValue}
            </Button>
          </div>
          {/*
          <div class="cardImg">
            <img 
            src={DeckBack}
            width="250px"
            height="400px"
            />
          </div>
          */}
        </div>
    )
}

export default startButton;