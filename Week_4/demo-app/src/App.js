import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

function App() {

  let name = "JJ";

  const names = ["JJ", "TPEO", "My bae"]

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World!</p>
        <p>Hello {name} </p>
        {/*
        <Greeting name = "me"></Greeting>
        <Greeting name = "jj"></Greeting>
        <Greeting name = "me"></Greeting>
        */}

        {names.map((name, index) => <Greeting name = {name} key = {index}/>)}
      </header>
    </div>
  );
}

export default App;



