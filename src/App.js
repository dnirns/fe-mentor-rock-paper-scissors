import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import Options from './components/Options'
import Result from './components/Result'
import Button from './components/Button'
import { useSelector } from 'react-redux'

const App = () => {
  const [modal, setModal] = useState(false)
  const [userChoice, setUserChoice] = useState(null)
  const [compChoice, setCompChoice] = useState(null)

  const score = useSelector((state) => state.score.score)

  const handleOpenModal = () => {
    setModal(true)
  }
  const handleCloseModal = () => {
    setModal(false)
  }

  const handleCompChoice = () => {
    const choices = ['rock', 'paper', 'scissors']
    setCompChoice(choices[Math.floor(Math.random() * choices.length)])
  }

  const handleUserChoice = (choice) => {
    setUserChoice(choice)
    handleCompChoice()
  }

  const handleReset = () => {
    setCompChoice(null)
    setUserChoice(null)
  }

  return (
    <div className='container'>
      <Modal
        openModal={handleOpenModal}
        closeModal={handleCloseModal}
        isModalOpen={modal}
      />

      <Header score={score} />
      {!userChoice && <Options userChoice={handleUserChoice} />}
      {userChoice && (
        <Result
          compChoice={compChoice}
          userChoice={userChoice}
          playAgain={handleReset}
        />
      )}

      <Button buttonAction={handleOpenModal} title='RULES' />
    </div>
  )
}

export default App
