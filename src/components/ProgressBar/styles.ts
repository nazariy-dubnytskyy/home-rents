import styled from 'styled-components';

export const Wrapper = styled.div<{ value: number }>`
  background-color: ${props => props.theme.color.lightGrey};
  height: 0.375rem;
  width: 100%;
  position: relative;
  border-radius: 0.375rem;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: -100%;
    background-color: ${props => props.theme.color.darkGrey};
    height: 0.375rem;
    transform: translateX(${props => props.value + '%'});
    width: 100%;
    border-radius: 0.375rem;
    transition: transform 1s cubic-bezier(0.17, 0.67, 0.19, 0.95) 0s;
  }
`;