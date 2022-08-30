import { useState } from 'react';
import logo from './logo.svg';
import './styles/App.scss';

export const App = () => {
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum(num + 1);
  }
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
      <p className='counter'>{num}</p>
      <p>
        <button onClick={onClickButton}>Click</button>
      </p>
    </div>
  );
}

export default App;
