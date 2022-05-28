import React from 'react';
import $ from 'jquery';

class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {rotate: 0}
    }

    render() {
        let name = this.props.src.replace('/static/media/', '').replace(/.[\d\w]{20}.png/, '')
        return <img
                src={this.props.src}
                id={name}
                alt={name}
                height='111px'
                width='128px'
                draggable='true'
                onMouseOver={() => {if (!$('#' + name).parent().hasClass('library')) window.hoveredTile = name}}
                onMouseOut={() => window.hoveredTile = null}
                onDragStart={event => event.dataTransfer.setData('text/plain',null)}
            />
    }
}

export default Tile