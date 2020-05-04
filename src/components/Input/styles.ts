import styled, { css } from 'styled-components';

type InputElemProps = {
  name?: string;
  disabled?: boolean;
  type?: string;
  placeholder?: string;
  isSearch?: boolean;
  value?: string;
  role: string;
  onChange: (event: any) => void;
};

export const InputElem = styled.input`
  display: block;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  width: ${props => props.type === 'radio' && 'auto'};
  color: ${props => props.theme.color.darkGrey};
  border-color: ${props => props.theme.color.darkGrey};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'text')};
  &::placeholder {
    color: ${props => props.theme.color.lightGrey};
  }
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.defaultSize};
  padding: ${props => props.theme.spaceUnit.two};
`;
