import * as React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 ${props => props.theme.spaceUnit.two};
`;

function Home() {
  return (
    <Wrapper>
      This is implementation of <a href="https://www.notion.so/Frontend-Challenge-vo2-2020-bea9e123187f405e9c58db8c9e5f0320">Frontend Challenge vo2 - 2020.</a>
    </Wrapper>
  )
}

export default Home;