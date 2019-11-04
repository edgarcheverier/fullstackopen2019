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

export default Course;
