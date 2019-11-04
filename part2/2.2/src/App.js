import React from 'react';

const Header = props => <h1> {props.course} </h1>


const Part = props =>
  <li> {props.name} {props.exercises} </li>


const Content = ({ parts }) => {
  const contentParts = () => parts.map(part =>
    <Part key={part.id} name={part.name} exercises={part.exercises} />)

  return (
    <ul>
      {contentParts()}
    </ul>
  );
}

const Total = props => {
  let totalResult = 0;
  props.parts.forEach(part => {
    totalResult = totalResult + part.exercises
  })

  return (
    <strong>Total of {totalResult} exercises</strong>
  );
}

const Course = ({course}) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App;
