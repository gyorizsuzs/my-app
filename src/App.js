import logo from "./logo.svg";
import "./App.css";
import Pizza from "./components/Pizza/Pizza";

function App() {
  const pizzas = ["Diavola", "Kolbaszos Rajas", "Bubbletini"];
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>sziumiu</h1>
          {pizzas.map((pizza) => (
            <Pizza name={pizza} />
          ))}
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
    </>
  );
}

export default App;
