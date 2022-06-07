import React from 'react';
import $ from 'jquery';
import Tile from './Tile'

class TileLibrary extends React.Component {

    componentDidMount() {

        var images = require.context('./tiles', false, /\.(png|jpe?g|svg)$/).keys().map((item, index) => item.replace('./', './tiles/') )
        var imagesCode = ''
        images.forEach(i => imagesCode += `<Tile src={require('` + i + `')}/>`)
        console.log("images code:")
        console.log(imagesCode)

        window.dragged = null
        window.hoveredTile = null

        document.addEventListener("drag", function(event) {
        }, false);

        document.addEventListener("dragstart", function(event) {
            window.dragged = event.target;
            event.target.style.opacity = .5;
        }, false);

        document.addEventListener("dragend", function(event) {
            event.target.style.opacity = "";
        }, false);

        document.addEventListener("dragover", function(event) {
            event.preventDefault();
        }, false);

        // document.addEventListener("dragenter", function(event) {
        //     // highlight potential drop target when the draggable element enters it
        //     if (event.target.classList.contains("dropzone") && !event.target.classList.contains("library")) {
        //         event.target.style.background = "purple";
        //     }

        // }, false);

        // document.addEventListener("dragleave", function(event) {
        //     // reset background of potential drop target when the draggable element leaves it
        //     if (event.target.classList.contains("dropzone") && !event.target.classList.contains("library")) {
        //         event.target.style.background = "";
        //     }

        // }, false);

        document.addEventListener("drop", function(event) {
            event.preventDefault();
            if (event.target.classList.contains("dropzone")) {

                let item = window.dragged
                let start = item.parentNode,
                    end = event.target
                // let startedLibrary = start.classList.contains("library"),
                //     endedLibrary = end.classList.contains("library")

                start.style.background = "";
                end.style.background = "";
                
                // if (startedLibrary && !endedLibrary) {
                //     item.style.opacity = "";
                //     start.appendChild(item.cloneNode())
                //     end.appendChild(item);
                // }
                // else if (!startedLibrary && endedLibrary) {
                //     start.removeChild( item );
                // }
                // else if (!startedLibrary && !endedLibrary) {
                    start.removeChild( item );
                    end.appendChild( item );
                //}
            }
        }, false);

        document.addEventListener("keydown", function(event) {
            if ((event.key === 'a' || event.key === 'ArrowLeft') && window.hoveredTile != null) {
                switch($('#' + window.hoveredTile).css('transform')) {
                    case 'none':
                        $('#' + window.hoveredTile).css({'transform': 'rotate(-60deg)'})
                        break;
                    case 'matrix(0.5, -0.866025, 0.866025, 0.5, 0, 0)':
                        $('#' + window.hoveredTile).css({'transform': 'rotate(-120deg)'})
                        break;
                    case 'matrix(-0.5, -0.866025, 0.866025, -0.5, 0, 0)':
                        $('#' + window.hoveredTile).css({'transform': 'rotate(-180deg)'})
                        break;
                    case 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)':
                    case 'matrix(-1, -1.22465e-16, 1.22465e-16, -1, 0, 0)':
                        $('#' + window.hoveredTile).css({'transform': 'rotate(-240deg)'})
                        break;
                    case 'matrix(-0.5, 0.866025, -0.866025, -0.5, 0, 0)':
                        $('#' + window.hoveredTile).css({'transform': 'rotate(-300deg)'})
                        break;
                    case 'matrix(0.5, 0.866025, -0.866025, 0.5, 0, 0)':
                        $('#' + window.hoveredTile).css({'transform': ''})
                        break;
                    default:
                }
            }
            if ((event.key === 'd' || event.key === 'ArrowRight') && window.hoveredTile != null) {
                switch($('#' + window.hoveredTile).css('transform')) {
                    case 'none':
                        $('#' + window.hoveredTile).css({'transform': 'rotate(60deg)'})
                        break;
                    case 'matrix(0.5, 0.866025, -0.866025, 0.5, 0, 0)':
                        $('#' + window.hoveredTile).css({'transform': 'rotate(120deg)'})
                        break;
                    case 'matrix(-0.5, 0.866025, -0.866025, -0.5, 0, 0)':
                        $('#' + window.hoveredTile).css({'transform': 'rotate(180deg)'})
                        break;
                    case 'matrix(-1, -1.22465e-16, 1.22465e-16, -1, 0, 0)':
                    case 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)':
                        $('#' + window.hoveredTile).css({'transform': 'rotate(240deg)'})
                        break;
                    case 'matrix(-0.5, -0.866025, 0.866025, -0.5, 0, 0)':
                        $('#' + window.hoveredTile).css({'transform': 'rotate(300deg)'})
                        break;
                    case 'matrix(0.5, -0.866025, 0.866025, 0.5, 0, 0)':
                        $('#' + window.hoveredTile).css({'transform': ''})
                        break;
                    default:
                }
            }
        }, false)
    }

    componentDidUpdate(prevProps) {
        $('.library *').show()
        this.props.selectedTags.forEach(tag => $('.library *').not('.' + tag).hide())
    }

    render() {
        return (
            <div className='dropzone library hidden-print' style={{border: '2px solid black', height: "600px", width: "800px", overflow: 'auto'}}>
                {/* {images code goes there  VVVV} */}
                <Tile src={require('./tiles/Desert_1.png')}/><Tile src={require('./tiles/Desert_10.png')}/><Tile src={require('./tiles/Desert_11.png')}/><Tile src={require('./tiles/Desert_12.png')}/><Tile src={require('./tiles/Desert_13.png')}/><Tile src={require('./tiles/Desert_2.png')}/><Tile src={require('./tiles/Desert_3.png')}/><Tile src={require('./tiles/Desert_4.png')}/><Tile src={require('./tiles/Desert_5.png')}/><Tile src={require('./tiles/Desert_6.png')}/><Tile src={require('./tiles/Desert_7.png')}/><Tile src={require('./tiles/Desert_8.png')}/><Tile src={require('./tiles/Desert_9.png')}/><Tile src={require('./tiles/Mountains_ 1.png')}/><Tile src={require('./tiles/Mountains_ 10.png')}/><Tile src={require('./tiles/Mountains_ 2.png')}/><Tile src={require('./tiles/Mountains_ 3.png')}/><Tile src={require('./tiles/Mountains_ 4.png')}/><Tile src={require('./tiles/Mountains_ 5.png')}/><Tile src={require('./tiles/Mountains_ 6.png')}/><Tile src={require('./tiles/Mountains_ 7.png')}/><Tile src={require('./tiles/Mountains_ 8.png')}/><Tile src={require('./tiles/Mountains_ 9.png')}/><Tile src={require('./tiles/SmallCity_1.png')}/><Tile src={require('./tiles/SmallCity_2.png')}/><Tile src={require('./tiles/SmallCity_3.png')}/><Tile src={require('./tiles/SmallCity_4.png')}/><Tile src={require('./tiles/SmallCity_5.png')}/><Tile src={require('./tiles/SmallCity_6.png')}/><Tile src={require('./tiles/SmallCity_7.png')}/><Tile src={require('./tiles/SmallCity_8.png')}/><Tile src={require('./tiles/Tile_1.png')}/><Tile src={require('./tiles/Tile_10.png')}/><Tile src={require('./tiles/Tile_11.png')}/><Tile src={require('./tiles/Tile_12.png')}/><Tile src={require('./tiles/Tile_13.png')}/><Tile src={require('./tiles/Tile_14.png')}/><Tile src={require('./tiles/Tile_15.png')}/><Tile src={require('./tiles/Tile_16.png')}/><Tile src={require('./tiles/Tile_17.png')}/><Tile src={require('./tiles/Tile_18.png')}/><Tile src={require('./tiles/Tile_19.png')}/><Tile src={require('./tiles/Tile_2.png')}/><Tile src={require('./tiles/Tile_20.png')}/><Tile src={require('./tiles/Tile_21.png')}/><Tile src={require('./tiles/Tile_22.png')}/><Tile src={require('./tiles/Tile_23.png')}/><Tile src={require('./tiles/Tile_24.png')}/><Tile src={require('./tiles/Tile_25.png')}/><Tile src={require('./tiles/Tile_26.png')}/><Tile src={require('./tiles/Tile_27.png')}/><Tile src={require('./tiles/Tile_3.png')}/><Tile src={require('./tiles/Tile_4.png')}/><Tile src={require('./tiles/Tile_5.png')}/><Tile src={require('./tiles/Tile_6.png')}/><Tile src={require('./tiles/Tile_7.png')}/><Tile src={require('./tiles/Tile_8.png')}/><Tile src={require('./tiles/Tile_9.png')}/>
            </div>
        )
    }
}

export default TileLibrary
