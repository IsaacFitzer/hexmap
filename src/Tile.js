import React from 'react';
import $ from 'jquery';

class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {rotate: 0}
    }

    render() {
        let name = this.props.src.replace('/static/media/', '').replace(/.[\d\w]{20}.png/, '')

        console.log($('#' + name).parent().hasClass('library'))
        return <img
                src={this.props.src}
                id={name}
                alt={name}
                height='110px'
                width='128px'
                draggable='true'
                //style={{transform: `rotate(${this.state.rotate}deg)`}}
                //onMouseOver={e => e.currentTarget.addEventListener("keypress", e => this.onKeyPressEvent(e))}
                onMouseOver={() => {if (!$('#' + name).parent().hasClass('library')) window.hoveredTile = name}}
                onMouseOut={() => window.hoveredTile = null}
                //onMouseOut={e => $('#' + name).removeEventListener("keypress", e => this.onKeyPressEvent(e))}
                onDragStart={event => event.dataTransfer.setData('text/plain',null)}
            />
    }
}

export default Tile