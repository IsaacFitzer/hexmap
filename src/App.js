import './App.css'
import React from 'react'
import Hexmap from './Hexmap'
import TileLibrary from './TileLibrary'
import TagButtons from './TagButtons'

window.tagPool = [
  ['Forest', 'Desert', 'Mountains', 'City', 'Road'],
  ['Land', 'Sea', 'Coast'],
  ['Tile'],
]

window.tileTags = {
  'Tile_1': 'Forest Coast',
  'Tile_2': 'Coast',
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selectedTags: []}
  }

  onTagClick = tag => {
    let sTags = this.state.selectedTagsdd
    if (sTags.includes(tag))
      this.setState({selectedTags: sTags.filter((t) => t !== tag)})
    else {
      let tagGroup = window.tagPool.find(g => g.includes(tag))
      sTags = sTags.filter(sTag => !tagGroup.includes(sTag))
      this.setState({selectedTags: sTags.concat([tag])})
    }
  }

  render() {
    return (
      <div className="App">
        <Hexmap width={875} height={1150} radius={60}/>
        <div style={{float: "right"}}>
          <TileLibrary selectedTags={this.state.selectedTags}/>
          <TagButtons onTagClick={this.onTagClick} selectedTags={this.state.selectedTags} />
        </div>
      </div>
    );
  }
}

export default App;
