import styled from 'styled-components';

type ButtonStyledProps = {
  disabled: boolean;
  small: boolean;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  display: block;
  width: ${props => props.small ? '120px' : '100%'};
  color: ${props => props.theme.color.almostWhite};
  border: none;
  background-color: ${props => props.theme.color.primary};
  opacity: ${props => props.disabled ? '0.5' : '1'};
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.fontSizes.large};
  padding: ${props => props.theme.spaceUnit.one};
  margin-left: ${props => props.theme.spaceUnit.one};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
`;

export { ButtonStyled };