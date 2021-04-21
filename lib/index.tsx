import * as React from 'react';
import ReactDOM from 'react-dom';
// import Button from './button/button';
import Icon from './icon/icon';

function render() {
  ReactDOM.render(
    <div>
      <Icon name="wechat"/>
    </div>, document.querySelector('#root'));
}

render();
