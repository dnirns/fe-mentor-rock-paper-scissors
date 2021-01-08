import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  increaseScore,
  decreaseScore,
  resetScore,
} from './actions/scoreActions'
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
  const [winner, setWinner] = useState('')

  const score = useSelector((state) => state.score.score)

  const dispatch = useDispatch()

  const handleOpenModal = () => {
    setModal(true)
  }
  const handleCloseModal = () => {
    setModal(false)
  }

  const handleReset = () => {
    setCompChoice(null)
    setUserChoice(null)
  }

  const handleUserChoice = (choice) => {
    const choices = ['rock', 'paper', 'scissors']
    const winnerMsg = 'YOU WON'
    const loserMsg = 'YOU LOSE'

    const randomChoice = choices[Math.floor(Math.random() * choices.length)]

    setUserChoice(choice)
    setCompChoice(randomChoice)

    if (choice === randomChoice) {
      setWinner('DRAW')
    } else if (choice === 'rock' && randomChoice === 'scissors') {
      setWinner(winnerMsg)
      dispatch(increaseScore)
    } else if (choice === 'scissors' && randomChoice === 'paper') {
      setWinner(winnerMsg)
      dispatch(increaseScore)
    } else if (choice === 'paper' && randomChoice === 'rock') {
      setWinner(winnerMsg)
      dispatch(increaseScore)
    } else {
      setWinner(loserMsg)
      dispatch(decreaseScore)
    }
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
          winner={winner}
        />
      )}

      <div className='button-container'>
        <div className='button rules' onClick={handleOpenModal}>
          <h3>RULES</h3>
        </div>
        <div className='button' onClick={() => dispatch(resetScore)}>
          <h4>RESET SCORE</h4>
        </div>
      </div>
    </div>
  )
}

export default App
