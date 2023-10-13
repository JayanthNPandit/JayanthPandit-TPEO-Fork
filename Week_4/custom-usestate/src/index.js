import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

let stateValues = []
let index = -1
let stateValue

const useState = (initialValue) => {
  index++

  const newIndex = Number(index)

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
            <button onClick={() => setCountA(countA - 1)} >Subtract</button>
            <button onClick={() => setCountA(countA + 1)} >Add</button>
        </div>
        <div>
            <h1>Count B: {countB} </h1>
            <button onClick={() => setCountB(countB - 5)} >Subtract</button>
            <button onClick={() => setCountB(countB + 5)} >Add</button>
        </div>
    </div>
  )
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById("root"))

  index = -1
}

render()

