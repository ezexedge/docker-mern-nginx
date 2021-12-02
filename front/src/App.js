import logo from './logo.svg';
import './App.css';
import React , {useEffect} from 'react';


function App() {


  const llamada = async () => {

    const response = await fetch('http://46.101.206.241:8080/api/prueba/test');
    const json = await response.json();
    console.log(json);

  }

  useEffect(()=>{

    llamada()

  },[])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
