import React from 'react';
import './importIcons.js'


interface IconProps {
  name: string
}

const Icon: React.FC<IconProps> = (props) => {
  return (
    <svg>
      <use xlinkHref="#setting"/>
    </svg>
  );
};

export default Icon;
