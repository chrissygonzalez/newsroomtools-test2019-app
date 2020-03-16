import React, { Component } from 'react';
import graphics from '../json/graphics.json';
import Graphic from './Graphic';

class GraphicsGrid extends Component {
    constructor(){
        super();
        this.state = {
            graphics: []
        }
    }

    componentDidMount(){
        console.log(graphics);
        this.setState({
            graphics: graphics.recent
        });
    }

    render() {
        return (
            <div className="flex flex-wrap">
                {this.state.graphics.map((graphic, index) => {
                    return <Graphic key={index} image={graphic.promo_image} headline={graphic.headline} desc={graphic.description} />
                })}
            </div>
        )
    }
    }
export default GraphicsGrid; 