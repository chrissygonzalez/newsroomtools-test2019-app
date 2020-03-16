import React, { Component } from 'react';
import images from '../json/images.json';
import Image from './Image';

class ImageGrid extends Component {
    constructor(){
        super();
        this.state = {
            images: []
        }
    }

    componentDidMount(){
        this.setState({
            images: images.images
        });
    }

    render() {
        return (
            <div className="flex flex-wrap">
                {this.state.images.map((image, index) => {
                    return <Image key={index} credit={image.credit} caption={image.caption} href={image.href} />
                })}
            </div>
        )
    }
    }
export default ImageGrid; 