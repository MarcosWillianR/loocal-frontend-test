import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface ArrowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ComponentType<IconBaseProps>;
}

const Arrow: React.FC<ArrowProps> = ({ icon: Icon, ...rest }) => {
  return (
    <Container {...rest}>
      <Icon size={22} />
    </Container>
  );
};

export default Arrow;
