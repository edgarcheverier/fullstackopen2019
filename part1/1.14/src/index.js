import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const AnecdoteMostVoted = (props) => {
  if (props.initialVote) {
    const highestVote = [...props.votes].sort()[props.votes.length -1];
    let highestAnecdote
    props.votes.forEach((ele, index) => {
      if (ele === highestVote) { highestAnecdote = index }
    })
    return <p>{props.anecdotes[highestAnecdote]}</p>
  }
  return <p>No votes yet in any of the anecdotes, be the first one!</p>
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(props.anecdotes.map(() => 0))
  const [initialVote, setInitialVote] = useState(false)

  const handleAnecdoteClick = () => {
    const randomNumber = Math.floor((Math.random() * 6));
    setSelected(randomNumber);
  }

  const handleVoteClick = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] = updatedVotes[selected] + 1;
    setVotes(updatedVotes);
    setInitialVote(true)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <button onClick={handleVoteClick}>Vote</button>
      <button onClick={handleAnecdoteClick}>Next anecdote</button>
      <h1>Anecdote with most votes: </h1>
      <AnecdoteMostVoted initialVote={initialVote} votes={votes} anecdotes={props.anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
