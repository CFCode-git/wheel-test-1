import * as React from 'react';
import ReactDOM from 'react-dom';
// import Button from './button/button';
import Icon from './icon/icon';

const fn:React.MouseEventHandler = (e) => {
  console.log(e);
  console.log(e.target);
  console.log('fn');
};

function render() {
  ReactDOM.render(
    <div>
      <Icon name="wechat" onClick={fn}/>
    </div>, document.querySelector('#root'));
}

render();
