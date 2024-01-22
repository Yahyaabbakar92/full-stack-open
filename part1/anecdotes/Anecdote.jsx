const Anecdote = ({ anecdote, numberOfVotes }) => {
  return (
    <>
    <p>{anecdote}</p>
    <p>Has {numberOfVotes} votes</p>
    </>
  )
}

export default Anecdote