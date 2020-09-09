import React from 'react'

class SimpleComponent extends React.Component {
    state = {
        mood: 'happy'
    }

    handleClick = (e) => {
        if (this.state.mood === 'happy') {
            return this.setState({mood: 'sad'})
        } else {
            return this.setState({mood: 'happy'})
        }
    }

    render(){
        return <div onClick={this.handleClick}>{this.state.mood}</div>
    }
}

export default SimpleComponent
