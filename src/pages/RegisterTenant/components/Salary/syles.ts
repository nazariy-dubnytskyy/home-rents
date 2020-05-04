import styled from 'styled-components';

export const SalaryRange = styled.div`
  display: flex;
  padding: ${props => props.theme.spaceUnit.one};
  font-size: ${props => props.theme.fontSizes.large};
`;

export const Text = styled.div`
  display: inline-block;
  margin-left: ${props => props.theme.spaceUnit.one};
`;