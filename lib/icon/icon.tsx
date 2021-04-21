import React from 'react';
import './importIcons.js';
import './icon.scss';
import classes from '../helpers/classes';


interface IconProps extends React.HTMLAttributes<SVGElement> {
  name: string
}

const Icon: React.FC<IconProps> = ({className, name, ...restProps}) => {
  return (
    <svg className={classes('bui-icon', className)}
         {...restProps}
    >
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;
