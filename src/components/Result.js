import React, { useState, useEffect } from 'react'
import rockIcon from '../assets/icon-rock.svg'
import paperIcon from '../assets/icon-paper.svg'
import scissorsIcon from '../assets/icon-scissors.svg'

const Result = ({ userChoice, computerChoice }) => {
  const [userIcon, setUserIcon] = useState(null)
  const [compIcon, setCompIcon] = useState(null)

  useEffect(() => {
    const pickCompIcon = () => {
      if (computerChoice === 'rock') {
        setCompIcon(rockIcon)
      } else if (computerChoice === 'scissors') {
        setCompIcon(scissorsIcon)
      } else if (computerChoice === 'paper') {
        setCompIcon(paperIcon)
      } else return
    }
    pickCompIcon()
    const pickUserIcon = () => {
      if (userChoice === 'rock') {
        setUserIcon(rockIcon)
      } else if (userChoice === 'scissors') {
        setUserIcon(scissorsIcon)
      } else if (userChoice === 'paper') {
        setUserIcon(paperIcon)
      } else return
    }
    pickUserIcon()
  })

  console.log(computerChoice)

  return (
    <div className='options'>
      <div className='result'>
        <h3>YOU PICKED</h3>
        <div className={`option-border ${userChoice}`}>
          <div className='option'>
            <img src={userIcon} alt='paper-hand' />
          </div>
        </div>
      </div>
      <div className='result'>
        <h3>COMPUTER PICKED</h3>
        <div className={`option-border ${computerChoice}`}>
          <div className='option'>
            <img src={compIcon} alt='paper-scissors' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result
