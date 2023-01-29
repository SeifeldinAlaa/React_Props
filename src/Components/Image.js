import React, { Component } from 'react';
class Image extends Component {
    state = {}
    render() {
        return (

            <div >
                <img className='img' src={this.props.img} alt="" />
            </div>
        );
    }
}

export default Image;