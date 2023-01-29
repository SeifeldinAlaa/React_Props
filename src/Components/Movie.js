import React, { Component } from 'react';

class Movie extends Component {
    state = {}
    render() {
        return (
            <div className='title'>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Movie;