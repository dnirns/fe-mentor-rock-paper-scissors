import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import Options from './components/Options'
import Result from './components/Result'

const App = () => {
  const [modal, setModal] = useState(false)
  const [score, setScore] = useState(0)
  const [userChoice, setUserChoice] = useState('')

  const handleOpenModal = () => {
    setModal(true)
    console.log('Modal Opened')
  }
  const handleCloseModal = () => {
    setModal(false)
    console.log('Modal Closed')
  }

  const handleUserChoice = (choice) => {
    setUserChoice(choice)
    console.log(choice)
  }

  return (
    <div className='container'>
      <Modal
        openModal={handleOpenModal}
        closeModal={handleCloseModal}
        isModalOpen={modal}
      />

      <Header score={score} />
      {/* <Options userChoice={handleUserChoice} /> */}
      <Result />
      <div className='button-container'>
        <div className='button rules' onClick={handleOpenModal}>
          <h3>RULES</h3>
        </div>
      </div>
    </div>
  )
}

export default App
