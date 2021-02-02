import React from 'react'
import ReactDOM from 'react-dom'

// entire application is in same component
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
        <Header course = {course} />
        <Content part= {part1} exercises= {exercises1} />
        <Content part = {part2} exercises= {exercises2} />
        <Content part = {part3} exercises = {exercises3} />
        <Total total = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

// components used in App (after being sent data)
const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <p>Section: {props.part}  No. of exercises: {props.exercises}</p>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Total no. of exercises: {props.total}</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
