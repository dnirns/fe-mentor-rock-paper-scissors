import React, { useState, useEffect } from 'react'
import Button from './Button'
import rockIcon from '../assets/icon-rock.svg'
import paperIcon from '../assets/icon-paper.svg'
import scissorsIcon from '../assets/icon-scissors.svg'

const Result = ({ userChoice, compChoice, playAgain }) => {
  const [userIcon, setUserIcon] = useState(null)
  const [compIcon, setCompIcon] = useState(null)
  const [winner, setWinner] = useState('')

  const winnerMsg = 'YOU WON'
  const loserMsg = 'YOU LOSE'

  useEffect(() => {
    const getWinner = () => {
      if (userChoice === compChoice) {
        setWinner('DRAW')
      } else if (userChoice === 'rock' && compChoice === 'scissors') {
        setWinner(winnerMsg)
      } else if (userChoice === 'scissors' && compChoice === 'paper') {
        setWinner(winnerMsg)
      } else if (userChoice === 'paper' && compChoice === 'rock') {
        setWinner(winnerMsg)
      } else {
        setWinner(loserMsg)
      }
    }

    const pickUserIcon = () => {
      if (userChoice === 'rock') {
        setUserIcon(rockIcon)
      } else if (userChoice === 'scissors') {
        setUserIcon(scissorsIcon)
      } else if (userChoice === 'paper') {
        setUserIcon(paperIcon)
      } else return
    }

    const pickCompIcon = () => {
      if (compChoice === 'rock') {
        setCompIcon(rockIcon)
      } else if (compChoice === 'scissors') {
        setCompIcon(scissorsIcon)
      } else if (compChoice === 'paper') {
        setCompIcon(paperIcon)
      } else return
    }
    pickCompIcon()
    pickUserIcon()
    getWinner()
  })

  return (
    <>
      <div className='results'>
        {/* <div className='options'> */}
        <div className='result'>
          <h5>YOU PICKED</h5>
          <div className={`option-border ${userChoice}`}>
            <div className='option'>
              <img src={userIcon} alt='paper-hand' />
            </div>
          </div>
        </div>
        <div className='winner-desktop'>
          <h1 style={{ fontSize: '3em' }}>{winner}</h1>
          <div className='button play-again' onClick={playAgain}>
            <h4>PLAY AGAIN</h4>
          </div>
        </div>
        <div className='result'>
          <h4>THE HOUSE PICKED</h4>
          <div className={`option-border ${compChoice}`}>
            <div className='option'>
              <img src={compIcon} alt='paper-scissors' />
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
      <div className='winner-mobile'>
        <h1 style={{ fontSize: '3em' }}>{winner}</h1>
        <div className='button play-again' onClick={playAgain}>
          <h4>PLAY AGAIN</h4>
        </div>
      </div>
    </>
  )
}

export default Result
