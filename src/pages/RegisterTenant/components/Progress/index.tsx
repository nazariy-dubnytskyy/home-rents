import * as React from 'react';

import ProgressBar from '../../../../components/ProgressBar';
import { ProgressBarWrapper } from '../../styles';
import TenantContext from '../../context';

const TOTAL_STEPS = 4;

function Progress() {
  const { completedSteps } = React.useContext(TenantContext);
  const percentageOfFilledData = completedSteps / TOTAL_STEPS * 100;

  return (
    <ProgressBarWrapper>
      <ProgressBar value={percentageOfFilledData} />
    </ProgressBarWrapper>
  );
}

export default Progress;