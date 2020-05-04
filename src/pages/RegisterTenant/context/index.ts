import * as React from 'react';

type TenantContextType = {
  fullName: string;
  email: string;
  phone: string;
  salaryRange: number;
  completedSteps: number;
  setFullName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setSalaryRange: (salaryRange: number) => void;
  setCompletedSteps: (steps: number) => void;
}

const TenantContext = React.createContext<TenantContextType>(undefined);

export default TenantContext;
