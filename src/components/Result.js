import React, { useState, useEffect } from 'react'
import rockIcon from '../assets/icon-rock.svg'
import paperIcon from '../assets/icon-paper.svg'
import scissorsIcon from '../assets/icon-scissors.svg'

const Result = ({ userChoice, compChoice, playAgain, winner }) => {
  const [userIcon, setUserIcon] = useState(null)
  const [compIcon, setCompIcon] = useState(null)

  useEffect(() => {
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
  })

  return (
    <>
      <div className='results'>
        <div className='result'>
          <h4>YOU PICKED</h4>
          <div className={`option-border ${userChoice}`}>
            <div className='option'>
              <img src={userIcon} alt='paper-hand' />
            </div>
          </div>
        </div>
        <div className='winner-desktop'>
          <h1 style={{ fontSize: '3em' }}>{winner}</h1>
          <div className='button play-again' onClick={playAgain}>
            <h5>PLAY AGAIN</h5>
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
      </div>
      <div className='winner-mobile'>
        <h1 style={{ fontSize: '3em' }}>{winner}</h1>
        <div className='button play-again' onClick={playAgain}>
          <h5>PLAY AGAIN</h5>
        </div>
      </div>
    </>
  )
}

export default Result
