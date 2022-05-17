import React from 'react';
import ReactDOM from 'react-dom';

const a = Math.PI / 3;

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
        // let demo = React.createElement(
        //     "h1", { style: { color: "green" } }, "Welcome to GeeksforGeeks"
        // )
        // ReactDOM.render(
        //     demo,
        //     document.getElementById('root')
        // );

    }

    drawGrid(width, height, ctx) {
        let r = this.props.radius
        let dropZones = []
        for (let y = r; y + r * Math.sin(a) < height; y += r * Math.sin(a)) {
            for (let x = r, j = 0; x + r * (1 + Math.cos(a)) < width; x += r * (1 + Math.cos(a)), y += (-1) ** j++ * r * Math.sin(a)) {
                this.drawHexagon(x, y, ctx);
                dropZones.push(
                    React.createElement("div", {style: {backgroundColor: "red", height: 30, width: 30}})
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
            {/* {this.state.dropZones} */}
            <canvas id="canvas" width={this.props.width} height={this.props.height}/>
        </div>)
    }
}

export default Hexmap