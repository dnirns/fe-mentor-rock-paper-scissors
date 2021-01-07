import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import Options from './components/Options'
import Result from './components/Result'

const App = () => {
  const [modal, setModal] = useState(false)
  const [score, setScore] = useState(0)
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)

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
    setScore(0)
    setComputerChoice(null)
  }

  return (
    <div className='container'>
      <Modal
        openModal={handleOpenModal}
        closeModal={handleCloseModal}
        isModalOpen={modal}
      />

      <Header
        score={score}
        userChoice={userChoice}
        computerChoice={computerChoice}
      />
      {!userChoice && <Options userChoice={handleUserChoice} />}
      {userChoice && (
        <Result computerChoice={computerChoice} userChoice={userChoice} />
      )}
      <div className='button-container'>
        <div className='button rules' onClick={handleOpenModal}>
          <h3>RULES</h3>
        </div>
      </div>
    </div>
  )
}

export default App
