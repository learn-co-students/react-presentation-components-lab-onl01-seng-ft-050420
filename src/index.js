import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function helloWorld() {
  console.log('helloWorld')
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={helloWorld} />
  </div>,
  document.getElementById('root')
);
