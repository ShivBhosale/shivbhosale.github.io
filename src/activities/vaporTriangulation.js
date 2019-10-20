import React from 'react';
import {
    Tabs, Icon, Carousel, Card, Row, Col, Collapse,
    Button, Modal, TreeSelect, Divider, Tooltip
} from 'antd';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default class Triangulation extends React.Component {

    state = {
        dims: window.screen.width > 600 ? [20, 7] : [7, 7],
        col_pegs: [],
        col_pregs_dest: [],
        interm_pegs: [],
        screenWidth: window.screen.availWidth,
        screenHeight: window.screen.availHeight > window.screen.availWidth ? window.screen.availHeight / 2 : window.screen.availHeight
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    async transformTriangle() {
        const steps = [0.02, 0.06, 0.14, 0.30, 0.70, 0.86, 0.94, 0.98, 1.0]
        const col_pegs = this.state.col_pegs
        const new_col_pegs = await this.generateGrid()

        this.setState({
            col_pregs_dest: new_col_pegs
        });
        for (var p in steps) {
            var intermediate_pegs = [];
            for (var obj in col_pegs) {
                var intermediate_col = [];
                for (var spl in col_pegs[obj]) {
                    var delta = new_col_pegs[obj][spl] - col_pegs[obj][spl]
                    console.log(delta)
                    intermediate_col.push(col_pegs[obj][spl] + (delta * steps[p]))
                }
                intermediate_pegs.push(intermediate_col)
            }
            this.setState({
                col_pegs: intermediate_pegs
            })
            await this.renderTraingles()
            await sleep(1)
        }
        this.setState({
            col_pegs: new_col_pegs
        })

    }

    async generateGrid() {
        const splits = [30, 50, 40, 15, 20]
        var col_pegs = [];
        for (var j = 0; j <= this.state.dims[0]; j++) {
            var col_height = this.state.screenHeight;
            var temp_col = []
            var prev = 0
            for (var i = 0; i < this.state.dims[1]; i++) {
                var rand_split = this.getRandomInt(5, 21);
                temp_col.push(prev + col_height * (rand_split / 100))
                prev += col_height * (rand_split / 100)
                col_height = col_height * (1 - (rand_split / 100))
            }
            col_pegs.push(temp_col)
        }
        return col_pegs
    }

    async renderTraingles() {
        var col_pegs = this.state.col_pegs;
        console.log(col_pegs)
        var c = document.getElementById("triangulationCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.strokeStyle = "#559e89";
        ctx.fillStyle = "#FF0000";

        ctx.beginPath();
        // ctx.fillRect(0,0, 3, 3);
        var colStart = 0
        var colOffset = this.state.screenWidth / this.state.dims[0];
        colStart = 0;
        for (var obj in col_pegs) {
            var lower_coord = 0
            for (var spl in col_pegs[obj]) {
                lower_coord = col_pegs[obj][spl]
                // ctx.fillRect(colStart + colOffset, lower_coord, 3, 3);
                ctx.moveTo(colStart, lower_coord);
                ctx.lineTo(colStart, col_pegs[obj][spl - 1]);
                ctx.stroke();
                if (obj != 0) {
                    ctx.moveTo(colStart, lower_coord);
                    ctx.lineTo(colStart - colOffset, col_pegs[obj - 1][spl]);
                    ctx.stroke();

                    if (obj % 2 == 0) {
                        ctx.moveTo(colStart, lower_coord);
                        ctx.lineTo(colStart - colOffset, col_pegs[obj - 1][spl - 1]);
                        ctx.stroke();
                    }
                    else {
                        ctx.moveTo(colStart, col_pegs[obj][spl - 1]);
                        ctx.lineTo(colStart - colOffset, col_pegs[obj - 1][spl]);
                        ctx.stroke();
                    }

                }
            }
            colStart += colOffset;
        }

    }

    async componentDidMount() {

        this.setState({
            col_pegs: await this.generateGrid(),
            screenWidth: window.screen.availWidth,
            screenHeight: window.screen.availHeight > window.screen.availWidth ? window.screen.availHeight / 2 : window.screen.availHeight
        })
        await this.renderTraingles();
        this.timer = setInterval(() => this.transformTriangle(), 3000);
    }

    render() {
        return (
            <div>
                <canvas id="triangulationCanvas"
                    style={{
                        position:'fixed',
                        textAlign: 'none',
                        backgroundColor: '#282C34'
                    }}
                    width={window.screen.availWidth}
                    height={window.screen.availHeight}
                ></canvas>

            </div>
        )
    }
}