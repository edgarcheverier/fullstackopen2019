import React from 'react';

const Header = props => <h3> {props.course} </h3>


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
  const totalResult = props.parts.reduce((acc, part) => {
    return acc + part.exercises
  }, 0)

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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const displayCourses = () => courses.map(course => <Course key={course.id} course={course} />)

  return (
    <div>
      <h1>Web development curriculum</h1>
      {displayCourses()}
    </div>
  )
}

export default App;
