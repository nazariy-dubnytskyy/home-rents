import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from '../components/Navigation';
import Home from '../pages/Home';
import RegisterTenant from '../pages/RegisterTenant';

function Routes() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register-tenant" component={RegisterTenant} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;