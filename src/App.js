import './App.css';
import React from 'react';
import Hexmap from './Hexmap';
import TileLibrary from './TileLibrary';
import TagButtons from './TagButtons'

window.tagPool = ['Forest', 'Desert', 'Mountains', 'City', 'Road']

window.tileTags = {
  'Tile_1': 'forest coast',
  'Tile_2': 'coast',
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selectedTag: ''}
  }

  onTagClick = tag => {
    console.log(tag)
    if (this.state.selectedTag === tag)
      this.setState({selectedTag: ''})
    else
      this.setState({selectedTag: tag})
    //window.tagPool.includes()
  }

  render() {
    return (
      <div className="App">
        <Hexmap width={875} height={1150} radius={60}/>
        <div style={{float: "right"}}>
          <TileLibrary/>
          <TagButtons onTagClick={this.onTagClick} selectedTag={this.state.selectedTag} />
        </div>
      </div>
    );
  }
}

export default App;
