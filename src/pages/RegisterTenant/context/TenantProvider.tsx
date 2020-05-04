import * as React from 'react';

import TenantContext from '.';

type TenantProviderProps = {
  children: React.ReactNode;
}

function TenantProvider({ children }: TenantProviderProps) {
  const [completedSteps, setCompletedSteps ] = React.useState(0);
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [salaryRange, setSalaryRange] = React.useState(0);

  return (
    <TenantContext.Provider value={{
      completedSteps,
      fullName,
      email,
      phone,
      salaryRange,
      setCompletedSteps,
      setFullName,
      setEmail,
      setPhone,
      setSalaryRange,
    }}>
      {children}
    </TenantContext.Provider>
  );
}

export default TenantProvider;