import React from 'react'
import {AppContext} from "../App"
import { useContext } from 'react'

function GameOver() {
    const {gameOver, currentAttempt, correctWord} = useContext(AppContext)
    console.log(gameOver)
  return (
    <div className = 'gameOver'>
        <h3>{gameOver.guessedWord ? "You Correctly Guessed": "You failed"}</h3>
        <h1>Correct: {correctWord}</h1>
        {gameOver.guessedWord && (<h3>You guessed in {currentAttempt.attempt} attempts</h3>)}
    </div>
    
  )
}

export default GameOver