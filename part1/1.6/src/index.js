import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = (props) =>
  <button onClick={props.handleClick}>{props.text}</button>

const Results = ({name, total}) =>
  <p>{name}: {total}</p>

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => {setGood(good +1)}} text='Good'/>
      <Button handleClick={() => {setNeutral(neutral +1)}} text='Neutral'/>
      <Button handleClick={() => {setBad(bad +1)}} text='Bad'/>
      <h2>Statistics</h2>
      <Results name='Good' total={good} />
      <Results name='Neutral'total={neutral} />
      <Results name='Bad'total={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
