import * as React from 'react';
import { ButtonStyled } from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  small?: boolean;
  name?: string;
  onClick: (event: React.SyntheticEvent) => void;
};

const Button = ({
  children,
  disabled,
  name,
  onClick,
  small
}: ButtonProps) => (
  <ButtonStyled
    disabled={disabled}
    name={name}
    small={small}
    onClick={onClick}
  >
    {children}
  </ButtonStyled>
);

export default Button;
