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

        // this.setState({images: images})

        window.dragged = null
        window.hoveredTile = null

        /* events fired on the draggable target */
        document.addEventListener("drag", function(event) {
        }, false);

        document.addEventListener("dragstart", function(event) {
            // store a ref. on the dragged elem
            window.dragged = event.target;
            // make it half transparent
            event.target.style.opacity = .5;
        }, false);

        document.addEventListener("dragend", function(event) {
            // reset the transparency
            event.target.style.opacity = "";
        }, false);

        /* events fired on the drop targets */
        document.addEventListener("dragover", function(event) {
            // prevent default to allow drop
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
            // prevent default action (open as link for some elements)
            event.preventDefault();
            // move dragged elem to the selected drop target
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

    render() {
        // var {images} = this.state
        // var tiles = images.map(el => <img src={el}/>);
        // require('./tiles/7deadlygamers.png')
        
        return (
            <div className='dropzone library hidden-print' style={{float: "right", border: '2px solid black', height: "600px", width: "400px"}}>
                {/* {images code goes there  VVVV} */}
               <Tile src={require('./tiles/Tile_1.png')}/><Tile src={require('./tiles/Tile_2.png')}/>
            </div>
        )
    }
}

export default TileLibrary
