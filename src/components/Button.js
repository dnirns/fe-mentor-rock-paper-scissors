import React from 'react'

const Button = ({ openModal, title }) => {
  return (
    <div className='button-container'>
      <div className='button rules' onClick={openModal}>
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default Button
