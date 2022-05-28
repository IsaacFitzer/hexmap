import React from 'react';

const a = Math.PI / 3;
const dropzoneHeight = 110, dropzoneWidth = 125, leftIndent = 20, topIndent = 20

class Hexmap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {dropZones: []}
    }

    drawHexagon(x, y, ctx) {
        let r = this.props.radius
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
        }
        ctx.closePath();
        ctx.stroke();
    }

    drawGrid(width, height, ctx) {
        let r = this.props.radius
        let dropZones = []
        for (let y = r; y + r * Math.sin(a) < height; y += r * Math.sin(a)) {
            for (let x = r, j = 0; x + r * (1 + Math.cos(a)) < width; x += r * (1 + Math.cos(a)), y += (-1) ** j++ * r * Math.sin(a)) {
                this.drawHexagon(x, y, ctx);
                dropZones.push(
                    {x: x, y: y}
                )
            }
        }
        this.setState( {dropZones: dropZones})
    }
    
    componentDidMount() {
        this.drawGrid(this.props.width, this.props.height, document.getElementById('canvas').getContext('2d'))

    }
    render() {
        return ( <div>
            <canvas id="canvas" width={this.props.width} height={this.props.height} style={{position: 'absolute', left: leftIndent, top: topIndent}}/>
            {this.state.dropZones.map(dz => <div id={`hex ${dz.x} ${dz.y}`} className='dropzone' style={{borderRadius: '50%', height: dropzoneHeight, width: dropzoneWidth, position: 'absolute', left: dz.x + leftIndent - dropzoneWidth / 2 - 1, top: dz.y + topIndent - dropzoneHeight / 2}}/>)}
        </div>)
    }
}

export default Hexmap
