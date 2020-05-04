import * as React from 'react';
import TenantContext from '../../context';
import { Title } from '../../styles';
import { DetailsRow, Label, Value } from './styles';

function RegisterTenantSummary() {
  const {
    fullName,
    email,
    phone,
    salaryRange,
  } = React.useContext(TenantContext);

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
        <Value>{salaryRange}</Value>
      </DetailsRow>
    </>
  );
}

export default RegisterTenantSummary;