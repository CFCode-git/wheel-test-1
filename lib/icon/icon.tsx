import React from 'react';

interface IconProps {
  name: string
}

const Icon: React.FC<IconProps> = () => {
  return (
    <span>{props.name}</span>
  );
};

export default Icon;
