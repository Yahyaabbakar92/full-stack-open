import { useState } from 'react'
import Header from './Header'
import Button from './Button'
import Display from './Display'

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


  return (
    <div>
      <Header />

      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />

      <h1>Statistics</h1>
      <Display text={"Good"} feedback={feedback.good} />
      <Display text={"Neutral"} feedback={feedback.neutral} />
      <Display text={"Bad"} feedback={feedback.bad} />
    </div>
  )
}

export default App