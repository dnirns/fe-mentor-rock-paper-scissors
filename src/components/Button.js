import React from 'react'

const Button = ({ buttonAction, title }) => {
  return (
    <div className='button-container'>
      <div className='button rules' onClick={buttonAction}>
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default Button
