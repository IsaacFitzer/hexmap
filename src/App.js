import logo from './logo.svg';
import './App.css';
import Hexmap from './Hexmap';
import TileLibrary from './TileLibrary';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Hexmap width={875} height={1150} radius={60}/>
      <TileLibrary/>
    </div>
  );
}

export default App;
