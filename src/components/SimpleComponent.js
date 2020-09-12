import React from 'react';

class SimpleComponent extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
          mood: "happy"
      };
    }
  
    handleChange = event => {
        this.setState({
          mood: "sad"
        })
      }
  
    render() {
      return(
          <div onClick={this.handleChange}>{this.state.mood}</div>
      )
    }
  }

  export default SimpleComponent
