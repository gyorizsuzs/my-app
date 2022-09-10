import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
/* import Click from './components/Click'; */

function App() {
  const initialText = ['Click me!', 'You clicked me!', 'Stop clicking me!'];

  let [buttonText, setButtonText] = useState(initialText[0]);

  const handleClick = () => {
    for (let i = 0; i < 2; i++) {
      if (buttonText === initialText[i]) {
        setButtonText(initialText[i + 1]);
      } else {
        setTimeout(() => {
          setButtonText(initialText[0]);
        }, 3000);
      }
    }
  };
  /*   const handleClick = () => {
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
  }; */
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
