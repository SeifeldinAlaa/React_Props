import React, { Component } from 'react'


class Paragraph extends Component {
    state = {}
    render() {
        return (
            <div><p>
                {this.props.sentence}
            </p>
            </div>
        );
    }
}

export default Paragraph;