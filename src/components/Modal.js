import React from 'react'
import rulesImg from '../assets/image-rules.svg'
import closeIcon from '../assets/icon-close.svg'

const Modal = ({ openModal, closeModal, isModalOpen }) => {
  return (
    <div>
      <div
        className='modal'
        style={{ display: isModalOpen ? 'block' : 'none' }}
      >
        <div className='modal-content'>
          <div className='rules-modal'>
            <div className='modal-header'>
              <h1>RULES</h1>
              <img
                className='close-icon'
                onClick={closeModal}
                style={{ cursor: 'pointer' }}
                src={closeIcon}
                alt='close-icon'
              />
            </div>
            <img src={rulesImg} alt='game-rules' />
            <img
              className='close-icon-mobile'
              onClick={closeModal}
              style={{ cursor: 'pointer' }}
              src={closeIcon}
              alt='close-icon'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
