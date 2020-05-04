import * as React from 'react';

import TenantContext from '../../context';
import { Title } from '../../styles';
import { DetailsRow, Label, Value } from './styles';
import { salaryRanges } from '../../../../constants';

function RegisterTenantSummary() {
  const {
    fullName,
    email,
    phone,
    salaryRange,
  } = React.useContext(TenantContext);
  const salaryRangeValue = salaryRanges[salaryRange-1].label;

  return (
    <>
      <Title>Registeration successful</Title>
      <DetailsRow>
        <Label>Fullname</Label>
        <Value>{fullName}</Value>
      </DetailsRow>
      <DetailsRow>
        <Label>Email</Label>
        <Value>{email}</Value>
      </DetailsRow>
      <DetailsRow>
        <Label>Phone</Label>
        <Value>{phone}</Value>
      </DetailsRow>
      <DetailsRow>
        <Label>Salary</Label>
        <Value>{salaryRangeValue}</Value>
      </DetailsRow>
    </>
  );
}

export default RegisterTenantSummary;