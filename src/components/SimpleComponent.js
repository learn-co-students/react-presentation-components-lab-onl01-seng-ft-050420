import React, { Component } from 'react'

export default class SimplerComponent extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            mood: 'happy'
        };
    }

    handleClick = () => {
        this.setState({mood: 'sad'})
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}