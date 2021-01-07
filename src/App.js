import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import Options from './components/Options'
import Result from './components/Result'
import Button from './components/Button'

const App = () => {
  const [modal, setModal] = useState(false)
  const [score, setScore] = useState(0)
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)

  const handleOpenModal = () => {
    setModal(true)
  }
  const handleCloseModal = () => {
    setModal(false)
  }

  const handleComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors']
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)])

  }

  const handleUserChoice = (choice) => {
    setUserChoice(choice)
    handleComputerChoice()
    setScore(0)
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

      <Button openModal={handleOpenModal} title='RULES' />
    </div>
  )
}

export default App
