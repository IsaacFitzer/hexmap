import './App.css';
import React from 'react';
import Hexmap from './Hexmap';
import TileLibrary from './TileLibrary';
import TagButtons from './TagButtons'

window.tagPool = [
  ['coast', 'land', 'sea'],
  ['forest'],
]

window.tileTags = {
  'Tile_1': 'forest coast',
  'Tile_2': 'coast',
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selected: ''}
  }

  onTagClick(tag) {
    console.log(tag)
    if (this.state.selected == tag)
      this.setState({selected: ''})
    else
      this.setState({selected: tag})
    //window.tagPool.includes()
  }

  render() {
    return (
      <div className="App">
        <Hexmap width={875} height={1150} radius={60}/>
        <div style={{float: "right"}}>
          <TileLibrary/>
          <TagButtons onTagClick={this.onTagClick} selected={this.state.selected} />
        </div>
      </div>
    );
  }
}

export default App;
