import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

<<<<<<< HEAD
let stateValues = []
let index = -1
let stateValue
=======
// array to track state
let stateValues = []
let index = -1
>>>>>>> upstream/main

const useState = (initialValue) => {
  index++

<<<<<<< HEAD
  const newIndex = Number(index)

=======
  // freeze this index in place so we set the correct index
  const newIndex = Number(index)

  // checks if it has been defined -> if not, set to initial
>>>>>>> upstream/main
  if (stateValues[newIndex] === undefined) {
    stateValues[newIndex] = initialValue
  }

<<<<<<< HEAD
  const setValue = (newValue) => {
    stateValues[newIndex] = newValue
    console.log(newValue)
    render()
  }

  return [stateValues[index], setValue]
=======
  // update state function
  const setValue = (newValue) => {
    stateValues[newIndex] = newValue
    render()
  }

  return [stateValues[newIndex], setValue]
>>>>>>> upstream/main
}

const App = () => {

<<<<<<< HEAD
  const [countA, setCountA] = useState(3)
  const [countB, setCountB] = useState(1)
=======
  // track state of counters
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(-1)
>>>>>>> upstream/main

  return (
    <div>
        <div>
            <h1>Count A: {countA} </h1>
<<<<<<< HEAD
            <button onClick={() => setCountA(countA - 1)} >Subtract</button>
            <button onClick={() => setCountA(countA + 1)} >Add</button>
        </div>
        <div>
            <h1>Count B: {countB} </h1>
            <button onClick={() => setCountB(countB - 5)} >Subtract</button>
            <button onClick={() => setCountB(countB + 5)} >Add</button>
=======
            <button onClick = {() => setCountA(countA - 1)} >Subtract</button>
            <button onClick = {() => setCountA(countA + 1)} >Add</button>
        </div>
        <div>
            <h1>Count B: {countB} </h1>
            <button onClick = {() => setCountB(countB - 1)} >Subtract</button>
            <button onClick = {() => setCountB(countB + 1)}>Add</button>
>>>>>>> upstream/main
        </div>
    </div>
  )
}

const render = () => {
<<<<<<< HEAD
  ReactDOM.render(<App />, document.getElementById("root"))
=======
  // reset index every render so useState tracks correct counter
  index = -1
  ReactDOM.render(<App />, document.getElementById("root"))
}

render()

>>>>>>> upstream/main

  index = -1
}

render()

