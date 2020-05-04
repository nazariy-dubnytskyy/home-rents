import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import UserFullName from './components/UserFullName';
import Email from './components/Email';
import PhoneNumber from './components/PhoneNumber';
import Salary from './components/Salary';
import TenantProvider from './context/TenantProvider';
import RegisterTenantSummary from './components/RegisterTenantSummary';
import { Wrapper } from './styles';
import Progress from './components/Progress';

function RegisterTenant() {
  return (
    <TenantProvider>
      <Wrapper>
        <Progress />
        <Switch>
            <Route path="/register-tenant/name" component={UserFullName} />
            <Route path="/register-tenant/email" component={Email} />
            <Route path="/register-tenant/phone" component={PhoneNumber} />
            <Route path="/register-tenant/salary" component={Salary} />
            <Route path="/register-tenant/summary" component={RegisterTenantSummary} />
        </Switch>
      </Wrapper>
    </TenantProvider>
  )
}

export default RegisterTenant;