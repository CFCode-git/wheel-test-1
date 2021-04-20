import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from './button/button';

function render() {
  ReactDOM.render(<Button/>, document.querySelector('#root'));
}

render();
