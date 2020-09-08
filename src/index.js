import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    {/* passes `handleClick` down to `SimplerComponent` as prop */}
    <SimplerComponent handleClick={undefined} />
  </div>,
  document.getElementById('root')
);