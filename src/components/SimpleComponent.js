import { render } from 'enzyme';
// Code SimpleComponent Here

import React from 'react'

export default class SimpleComponent extends React.Component {

    state = {
        mood: 'happy'
    }

    handleClick = () => {
        let mood = (this.state.mood == 'happy') ? 'sad' : 'happy'
        this.setState({
            mood: 'sad'
        })
    }
    
    render() {
        return(
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}