import './App.css'
import React from 'react'
import Hexmap from './Hexmap'
import TileLibrary from './TileLibrary'
import TagButtons from './TagButtons'

window.tagPool = [
  ['Forest', 'Desert', 'Mountains', 'SmallCity', 'Road'],
  ['Land', 'Sea', 'Coast'],
  ['Tile'],
]

window.tileTags = {
  'Tile_1': 'Coast',
  'Tile_2': 'Coast',
  'Tile_3': 'Coast',
  'Tile_4': 'Land',
  'Tile_5': 'Coast',
  'Tile_6': 'Land',
  'Tile_7': 'Coast',
  'Tile_8': 'Coast',
  'Tile_9': 'Land',
  'Tile_10': 'Coast',
  'Tile_11': 'Land',
  'Tile_12': 'Land',
  'Tile_13': 'Coast',
  'Tile_14': 'Coast',
  'Tile_15': 'Coast',
  'Tile_16': 'Coast',
  'Tile_17': 'Sea',
  'Tile_18': 'Sea',
  'Tile_19': 'Sea',
  'Tile_20': 'Sea',
  'Tile_21': 'Sea',
  'Tile_22': 'Coast',
  'Tile_23': 'Coast',
  'Tile_24': 'Coast',
  'Tile_25': 'Coast',
  'Tile_26': 'Coast',
  'Tile_27': 'Coast',
  
  'Desert_1': 'Land',
  'Desert_2': 'Land',
  'Desert_3': 'Land',
  'Desert_4': 'Land',
  'Desert_5': 'Land',
  'Desert_6': 'Land',
  'Desert_7': 'Coast',
  'Desert_8': 'Land',
  'Desert_9': 'Land',
  'Desert_10': 'Coast',
  'Desert_11': 'Land',
  'Desert_12': 'Land',
  'Desert_13': 'Coast',
  
  'Mountains_1': 'Land',
  'Mountains_2': 'Coast',
  'Mountains_3': 'Coast',
  'Mountains_4': 'Coast',
  'Mountains_5': 'Coast',
  'Mountains_6': 'Coast',
  'Mountains_7': 'Coast',
  'Mountains_8': 'Coast',
  'Mountains_9': 'Coast',
  'Mountains_10': 'Land',
  
  'SmallCity_1': 'Land Road City',
  'SmallCity_2': 'Coast Road City',
  'SmallCity_3': 'Land Road City',
  'SmallCity_4': 'Ocean Road City',
  'SmallCity_5': 'Land Road City',
  'SmallCity_6': 'Land Road City',
  'SmallCity_7': 'Coast Road City',
  'SmallCity_8': 'Coast Road City',

}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selectedTags: []}
  }

  onTagClick = tag => {
    let sTags = this.state.selectedTags
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
