import React from 'react'

const Header = ({ score }) => {
  return (
    <div>
      <header>
        <div className='title'>
          <h1>ROCK</h1>
          <h1>PAPER</h1>
          <h1>SCISSORS</h1>
        </div>
        <div className='score-box'>
          <p className='score-text'>SCORE</p>
          <h1 className='score'>{score}</h1>
        </div>
      </header>
    </div>
  )
}

export default Header
