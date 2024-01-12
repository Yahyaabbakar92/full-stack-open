import { useState } from 'react'
import Header from './Header'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const handleGood = () => {
    setFeedback({ ...feedback, good: feedback.good + 1 })
  }
  const handleNeutral = () => {
    setFeedback({ ...feedback, neutral: feedback.neutral + 1 })
  }
  const handleBad = () => {
    setFeedback({ ...feedback, bad: feedback.bad + 1 })
  }

  const total = feedback.good + feedback.neutral + feedback.bad
  const average = ((feedback.good - feedback.bad) / total) 
  const positive = ((feedback.good / total) * 100) 

  return (
    <div>
      <Header />

      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />

      <h1>Statistics</h1>
      {(total === 0 || average === isNaN) ? 
      <p>No feedback given</p> :
      <>
      <Statistics props={{
        good: feedback.good,
        neutral: feedback.neutral,
        bad: feedback.bad,
        total: total,
        average: average,
        positive: positive,
      }} />
      </>
      }
    </div>
  )
}

export default App