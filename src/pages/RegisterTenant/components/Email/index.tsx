import * as React from 'react';
import { useHistory } from 'react-router-dom';

import TenantContext from '../../context';
import Input from '../../../../components/Input';
import { Title, ButtonsWrapper } from '../../styles';
import Button from '../../../../components/Button';

function Email() {
  const {
    email,
    setEmail,
    completedSteps,
    setCompletedSteps
  } = React.useContext(TenantContext);
  const history = useHistory();

  const handleBackButtonClick = () => {
    setCompletedSteps(completedSteps - 1);
    history.push("/register-tenant/name");
  }

  const handleNextButtonClick = () => {
    setCompletedSteps(completedSteps + 1);
    history.push("/register-tenant/phone");
  }

  return (
    <>
      <Title>
        Please enter your email address
      </Title>
      <Input
        type="email"
        placeholder={'e.g. john.smith@gmail.com'}
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <ButtonsWrapper>
        <Button small onClick={handleBackButtonClick}>Back</Button>
        <Button
          small
          disabled={!email}
          onClick={handleNextButtonClick}
        >
          Next
        </Button>
      </ButtonsWrapper>
    </>
  );
}

export default Email;