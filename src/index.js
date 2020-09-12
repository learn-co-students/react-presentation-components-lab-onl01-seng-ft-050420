import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';
import { VirtualConsole } from 'jsdom';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick= 
     {event => 
     { return(alert("Not anymore"))}}/>
  </div>,
  document.getElementById('root')
);