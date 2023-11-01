import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

let stateValues = []
let index = -1
let stateValue

const useState = (initialValue) => {
  index++

  // freeze this index in place so we set the correct index
  const newIndex = Number(index)

  // checks if it has been defined -> if not, set to initial
  if (stateValues[newIndex] === undefined) {
    stateValues[newIndex] = initialValue
  }

  const setValue = (newValue) => {
    stateValues[newIndex] = newValue
    console.log(newValue)
    render()
  }

  return [stateValues[index], setValue]
}

const App = () => {

  const [countA, setCountA] = useState(3)
  const [countB, setCountB] = useState(1)

  return (
    <div>
        <div>
            <h1>Count A: {countA} </h1>
            <button onClick = {() => setCountA(countA - 1)} >Subtract</button>
            <button onClick = {() => setCountA(countA + 1)} >Add</button>
        </div>
        <div>
            <h1>Count B: {countB} </h1>
            <button onClick = {() => setCountB(countB - 1)} >Subtract</button>
            <button onClick = {() => setCountB(countB + 1)}>Add</button>
        </div>
    </div>
  )
}

const render = () => {
  // reset index every render so useState tracks correct counter
  index = -1
  ReactDOM.render(<App />, document.getElementById("root"))
}

render()


  index = -1
}

render()

