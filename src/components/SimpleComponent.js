import React from 'react'

class SimpleComponent extends React.Component {
    state = {
        mood: 'happy'
    }

    handleClick = () => {
        let mod
        this.state.mood === 'happy' ? mod = 'sad' : mod = 'happy'
        this.setState({
            mood: mod
        })
    }

    render() {
        return (
        <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}

export default SimpleComponent;