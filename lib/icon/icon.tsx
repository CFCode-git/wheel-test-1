import React from 'react';
import './importIcons.js';
import './icon.scss';


interface IconProps {
  name: string
}

const Icon: React.FC<IconProps> = (props) => {
  return (
    <svg className="bui-icon">
      <use xlinkHref="#setting"/>
    </svg>
  );
};

export default Icon;
