import React from 'react'
import rockIcon from '../assets/icon-rock.svg'
import paperIcon from '../assets/icon-paper.svg'
import scissorsIcon from '../assets/icon-scissors.svg'
import bgTriangle from '../assets/bg-triangle.svg'

const Options = ({ userChoice }) => {
  return (
    <div className='options'>
      <div className='triangle-container'>
        <img className='triangle' src={bgTriangle} alt='background-shape' />
      </div>
      <div onClick={() => userChoice('paper')} className='option-border paper'>
        <div className='option'>
          <img src={paperIcon} alt='paper-hand' />
        </div>
      </div>

      <div
        onClick={() => userChoice('scissors')}
        className='option-border scissors'
      >
        <div className='option'>
          <img src={scissorsIcon} alt='paper-scissors' />
        </div>
      </div>

      <div onClick={() => userChoice('rock')} className='option-border rock'>
        <div className='option'>
          <img src={rockIcon} alt='rock-hand' />
        </div>
      </div>
    </div>
  )
}

export default Options
