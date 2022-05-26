import './App.css';
import Hexmap from './Hexmap';
import TileLibrary from './TileLibrary';

function App() {
  return (
    <div className="App">
      <Hexmap width={875} height={1150} radius={60}/>
      <TileLibrary/>
    </div>
  );
}

export default App;
