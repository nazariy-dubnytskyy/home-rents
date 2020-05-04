import * as React from 'react';
import { useHistory } from 'react-router-dom';

import TenantContext from '../../context';
import Input from '../../../../components/Input';
import { Title, ButtonsWrapper } from '../../styles';
import Button from '../../../../components/Button';
import { SalaryRange, Text } from './syles';
import { salaryRanges } from '../../../../constants';

function Salary() {
  const {
    salaryRange,
    setSalaryRange,
    completedSteps,
    setCompletedSteps
 } = React.useContext(TenantContext);
  const history = useHistory();

  const handleBackButtonClick = () => {
    setCompletedSteps(completedSteps - 1);
    history.push("/register-tenant/email");
  }

  const handleFinishButtonClick = () => {
    setCompletedSteps(completedSteps + 1);
    history.push("/register-tenant/summary");
  }

  return (
    <>
      <Title>
        Please indicate your salary
      </Title>
      {salaryRanges.map((item, index) => {
        return (
        <SalaryRange key={item.id}>
          <Input
            type="radio"
            value={""+item.id}
            checked={item.id === Number(salaryRange)}
            onChange={event => setSalaryRange(event.target.value)}
          />
          <Text>{item.label}</Text>
        </SalaryRange>
        )
      })}
      <ButtonsWrapper>
        <Button small onClick={handleBackButtonClick}>Back</Button>
        <Button
          small
          disabled={!salaryRange}
          onClick={handleFinishButtonClick}
        >
          Finsih
        </Button>
      </ButtonsWrapper>
    </>
  );
}

export default Salary;