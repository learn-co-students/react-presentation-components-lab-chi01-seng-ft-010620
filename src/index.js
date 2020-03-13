import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function clickHandler(){
  console.log("hello")
}
ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={clickHandler} />
  </div>,
  document.getElementById('root')
);