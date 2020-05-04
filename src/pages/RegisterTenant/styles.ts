import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40%;
  margin: 0 auto;

  @media(max-width: 1000px) {
    width: 60%;
  }

  @media(max-width: 768px) {
    width: 90%;
    padding: 0 ${props => props.theme.spaceUnit.two};
  }
`;

export const ProgressBarWrapper = styled.div`
  padding-bottom: ${props => props.theme.spaceUnit.three};
`;

export const Title = styled.div`
  font-size: ${props => props.theme.fontSizes.xlarge};
  padding-top: ${props => props.theme.spaceUnit.three};
  padding-bottom: ${props => props.theme.spaceUnit.four};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: ${props => props.theme.spaceUnit.three};
`;