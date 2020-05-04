import * as React from 'react';
import { useHistory } from 'react-router-dom';

import TenantContext from '../../context';
import Input from '../../../../components/Input';
import { Title, ButtonsWrapper } from '../../styles';
import Button from '../../../../components/Button';

function PhoneNumber() {
  const {
    phone,
    setPhone,
    completedSteps,
    setCompletedSteps
 } = React.useContext(TenantContext);
  const history = useHistory();

  const handleBackButtonClick = () => {
    setCompletedSteps(completedSteps - 1);
    history.push("/register-tenant/email");
  }

  const handleNextButtonClick = () => {
    setCompletedSteps(completedSteps + 1);
    history.push("/register-tenant/salary");
  }

  return (
    <>
      <Title>
        Please enter your phone
      </Title>
      <Input
        type="text"
        placeholder={'e.g. +4915232231234'}
        value={phone}
        onChange={event => setPhone(event.target.value)}
      />
      <ButtonsWrapper>
        <Button small onClick={handleBackButtonClick}>Back</Button>
        <Button
          small
          disabled={!phone}
          onClick={handleNextButtonClick}
        >
          Next
        </Button>
      </ButtonsWrapper>
    </>
  );
}

export default PhoneNumber;