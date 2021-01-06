import rockIcon from './assets/icon-rock.svg'
import paperIcon from './assets/icon-paper.svg'
import scissorsIcon from './assets/icon-scissors.svg'
import bgTriangle from './assets/bg-triangle.svg'

const App = () => {
  return (
    <div className='container'>
      <header>
        <div className='title'>
          <h1>ROCK</h1>
          <h1>PAPER</h1>
          <h1>SCISSORS</h1>
        </div>
        <div className='score-box'>
          <p className='score-text'>SCORE</p>
          <h1 className='score'>12</h1>
        </div>
      </header>

      <div className='options'>
        <div className='triangle-container'>
          <img className='triangle' src={bgTriangle} alt='background-shape' />
        </div>
        <div className='option-border paper'>
          <div className='option'>
            <img src={paperIcon} alt='paper-hand' />
          </div>
        </div>

        <div className='option-border scissors'>
          <div className='option'>
            <img src={scissorsIcon} alt='paper-scissors' />
          </div>
        </div>

        <div className='option-border rock'>
          <div className='option'>
            <img src={rockIcon} alt='rock-hand' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
