import React from 'react';

  var SimplerComponent = function SimplerComponent(props) {
    return(
        <div onClick={props.handleClick}>"I am just happy"</div>
    );
  }

  export default SimplerComponent
