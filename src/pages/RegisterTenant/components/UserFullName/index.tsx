import * as React from 'react';
import { useHistory } from 'react-router-dom';

import TenantContext from '../../context';
import Input from '../../../../components/Input';
import { Title, ButtonsWrapper } from '../../styles';
import Button from '../../../../components/Button';

function UserFullName() {
  const {
    fullName,
    setFullName,
    completedSteps,
    setCompletedSteps
  } = React.useContext(TenantContext);
  const history = useHistory();

  if (completedSteps > 0) {
    setCompletedSteps(0);
  }

  const handleNextButtonClick = () => {
    setCompletedSteps(completedSteps + 1);
    history.push("/register-tenant/email");
  }

  return (
    <>
      <Title>
        Please enter your full name
      </Title>
      <Input
        type="text"
        placeholder={'e.g. John Smith'}
        value={fullName}
        onChange={event => setFullName(event.target.value)}
      />
      <ButtonsWrapper>
        <Button
          small
          disabled={!fullName}
          onClick={handleNextButtonClick}
        >
          Next
        </Button>
      </ButtonsWrapper>
    </>
  );
}

export default UserFullName;