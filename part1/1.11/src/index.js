import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = (props) =>
  <button onClick={props.handleClick}>{props.text}</button>

const Buttons = (props) => {
  return (
    <>
      <Button handleClick={() => {props.setGood(props.good +1)}} text='Good'/>
      <Button handleClick={() => {props.setNeutral(props.neutral +1)}} text='Neutral'/>
      <Button handleClick={() => {props.setBad(props.bad +1)}} text='Bad'/>
    </>
  )
}

const Statistic = ({name, total}) => (
  <tr>
    <td>{name}:</td>
    <td>{total}</td>
  </tr>
)


const Statistics = ({good, neutral, bad}) => {
  const getTotal = () => good + neutral + bad;

  const getAverage = () => (good - bad) / getTotal();

  const getPositivePercentage = () => (good / getTotal()) * 100

  if (getTotal() > 0) {
    return (
      <table>
        <thead>
          <tr>
            <th>Statistics</th>
          </tr>
        </thead>
        <tbody>
          <Statistic name='Good' total={good} />
          <Statistic name='Neutral' total={neutral} />
          <Statistic name='Bad' total={bad} />
        </tbody>
        <tfoot>
          <Statistic name='All' total={getTotal()} />
          <Statistic name='Average' total={getAverage()} />
          <Statistic name='Positive' total={`${getPositivePercentage()}%`} />
        </tfoot>
      </table>
    );
  }
  return <p>No feedback given</p>
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Buttons
        setGood={setGood}
        good={good}
        setNeutral={setNeutral}
        neutral={neutral}
        setBad={setBad}
        bad={bad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
