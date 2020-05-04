import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Navigation from '../components/Navigation';
import Home from '../pages/Home';
import RegisterTenant from '../pages/RegisterTenant';

const Wrapper = styled.div`
  width: 1000px;
  height: 100vh;
  padding: 0 20px;
  background-color: ${props => props.theme.color.almostWhite};

  @media(max-width: 1000px) {
    width: 100vw;
  }
`;

function Routes() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register-tenant" component={RegisterTenant} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  )
}

export default Routes;