import React from 'react'
import rockIcon from '../assets/icon-rock.svg'
import paperIcon from '../assets/icon-paper.svg'
import scissorsIcon from '../assets/icon-scissors.svg'

const Result = () => {
  return (
    <div className='options'>
      <div className='result'>
        <h3>YOU PICKED</h3>
        <div className='option-border paper'>
          <div className='option'>
            <img src={paperIcon} alt='paper-hand' />
          </div>
        </div>
      </div>
      <div className='result'>
        <h3>COMPUTER PICKED</h3>
        <div className='option-border scissors'>
          <div className='option'>
            <img src={scissorsIcon} alt='paper-scissors' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result
