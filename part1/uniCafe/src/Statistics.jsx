import StatisticLine from './StatisticLine'

const Statistics = ({ props: { good, neutral, bad, total, average, positive } }) => {
  return (
    <div>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average Score" value={average} />
        <StatisticLine text="Positive" value={positive} />
    </div>
  )
}

export default Statistics