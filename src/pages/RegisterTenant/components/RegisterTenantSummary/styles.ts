import styled from 'styled-components';

export const DetailsRow = styled.div`
  padding: ${props => props.theme.spaceUnit.two} 0;
`;

export const Label = styled.div`
  font-size: ${props => props.theme.fontSizes.large};
`;

export const Value = styled.div`
  font-weight: bold;
  color: ${props => props.theme.color.primary};
  padding: ${props => props.theme.spaceUnit.half} 0;
`;