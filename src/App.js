import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
/* import Pizza from './components/Pizza/Pizza'; */

function App() {
  /*  const pizzas = ['Diavola', 'Kolbaszos Rajas', 'Bubbletini']; */
  const initialText = 'Click me!';
  let [buttonText, setButtonText] = useState(initialText);

  const handleClick = () => {
    if (buttonText === initialText) {
      setButtonText('You clicked me!');
    }
    if (buttonText === 'You clicked me!') {
      setButtonText('Stop clicking me!');
    }
    if (buttonText === 'Stop clicking me!') {
      setTimeout(() => {
        setButtonText(initialText);
      }, 3000);
    }
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>Welcome to React</h1>
          <div>
            <button onClick={handleClick}>{buttonText}</button>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
